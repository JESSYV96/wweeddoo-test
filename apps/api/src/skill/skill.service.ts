import { Injectable } from '@nestjs/common';
import * as allSkills from '../../data/list_of_needs.json'
import { SkillDTO } from '../dto/skills/skill.dto';

@Injectable()
export class SkillService {

    /**
     * Get all skills available
     */
    public getAllSkills(): SkillDTO[] {
        return allSkills.skills;
    }
}
