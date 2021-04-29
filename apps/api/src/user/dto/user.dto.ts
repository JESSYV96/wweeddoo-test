import { ProjectDTO } from "../../project/dto/project.dto";
import { SkillDTO } from "../../skill/dto/skill.dto";

export class UserDTO {
    firstname: string;
    lastname: string;
    projects: ProjectDTO[];
    skills: SkillDTO[];
    needs: SkillDTO[];
}

