import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as usersJson from '../../data/users_data.json'
import { CreateUserDto } from '../dto/user/create-user.dto';
import { userMatchDTO } from '../dto/user/userMatch.dto';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async generateMatchingUserList(needs: string[]): Promise<userMatchDTO[]> {
        const usersMatches: userMatchDTO[] = [];
        const totalNeedsCount: number = needs.length;
        const userFromDB = await this.findAll()
        const userFromJSON = usersJson.data;
        const users = [...userFromDB, ...userFromJSON];

        users.map((user) => {
            const projectsUsersMatch: string[] = [];
            const skillsMatches: string[] = [];
            let skillsMatchesCount: number = 0;

            const skills = user.skills;
            const projects = user.projects;

            if (projects) {
                projects.forEach(project => {
                    projectsUsersMatch.push(project.name)
                    return;
                })
            }

            if (skills) {
                skills.forEach(skill => {
                    if (needs.includes(skill.content)) {
                        skillsMatchesCount++;
                        skillsMatches.push(skill.content);
                    }
                    return;
                });
            }

            if (skillsMatchesCount > 0) {
                const userMatch = new userMatchDTO();
                userMatch.fullName = `${user.firstname} ${user.lastname}`;
                userMatch.skillsMatches = skillsMatches;
                userMatch.percentageMatch = this.percentageSkillsMatch(skillsMatchesCount, totalNeedsCount);
                userMatch.projects = projectsUsersMatch;

                usersMatches.push(userMatch);
            }

            return;
        })

        return usersMatches
    }

    private percentageSkillsMatch(skillsMatches: number, totalNeeds: number): number {
        return Math.round(skillsMatches / totalNeeds * 100);
    }

    create(createUserDto: CreateUserDto) {
        const newUser: User = new User()
        newUser.firstname = createUserDto.firstname
        newUser.lastname = createUserDto.lastname
        newUser.email = createUserDto.email
        newUser.password = createUserDto.password
        newUser.projects = createUserDto.projects
        newUser.skills = createUserDto.skills
        newUser.needs = createUserDto.needs

        return this.usersRepository.save(newUser);
    }

    async findUser(email: string): Promise<User | undefined> {
        const users = await this.findAll()
        return users.find(user => user.email === email);
    }

    findAll() {
        return this.usersRepository.find();
    }

    findOne(id: number) {
        return this.usersRepository.findOne(id);
    }

    remove(id: number) {
        return this.usersRepository.delete(id);
    }
}
