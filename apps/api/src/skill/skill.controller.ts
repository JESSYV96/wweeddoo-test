import { Controller, Get } from '@nestjs/common';
import { SkillDTO } from './dto/skill.dto';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
    constructor(private readonly skillService: SkillService) { }

    @Get('list')
    getAllSkills(): SkillDTO[] {
        return this.skillService.getAllSkills();
    }
}
