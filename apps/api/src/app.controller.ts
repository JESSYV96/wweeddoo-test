import { Controller, Request, Post, UseGuards, HttpCode, Header } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @HttpCode(200)
  async login(@Request() req) {
    return req.user;
  } 
}