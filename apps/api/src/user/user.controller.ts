import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { SkillDTO } from '../dto/skills/skill.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { UserDTO } from '../dto/user/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('current')
  async findUsercurrentUserTemp() {
    const data = await this.userService.findOne(3)
    const user: UserDTO = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      projects: data.projects,
      skills: data.skills,
      needs: data.needs,
    }
    return user
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('matches')
  @HttpCode(200)
  retrieveListOfMatchingsUsers(@Body() listOfNeeds: any) {
    const needs: string[] = listOfNeeds.data.map(need => need.content);
    return this.userService.generateMatchingUserList(needs)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
