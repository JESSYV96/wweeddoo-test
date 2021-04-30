import { ProjectDTO } from "../project/project.dto";
import { SkillDTO } from "../skills/skill.dto";


export class UserDTO {
    firstname: string;
    lastname: string;
    email: string;
    projects: ProjectDTO[];
    skills: SkillDTO[];
    needs: SkillDTO[];
}

