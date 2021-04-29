import { Injectable } from '@nestjs/common';
import { SkillDTO } from './dto/skill.dto';
import * as allSkills from '../../data/list_of_needs.json'

@Injectable()
export class SkillService {

    /**
     * Get all skills available
     */
    public getAllSkills(): SkillDTO[] {
        return allSkills.skills;
    }
}
