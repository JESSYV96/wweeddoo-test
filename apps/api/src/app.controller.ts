import { Controller, Request, Post, UseGuards, HttpCode, Header } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Allow-Headers', '*, Accept, Content-Type')
  @Header('Access-Control-Allow-Methods', 'GET, POST')
  @HttpCode(200)
  async login(@Request() req) {
    return req.user;
  }

}