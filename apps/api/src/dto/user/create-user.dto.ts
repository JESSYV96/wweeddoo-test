import { Project } from "../../project/project.entity";
import { Skill } from "../../skill/skill.entity";

export class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    projects: Project[]
    skills: Skill[]
    needs: Skill[]
}
