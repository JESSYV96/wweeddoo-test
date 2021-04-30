import { ProjectDTO } from "../project/project.dto";
import { SkillDTO } from "../skills/skill.dto";

export interface CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    projects: ProjectDTO[]
    skills: SkillDTO[]
    needs: SkillDTO[]
}
