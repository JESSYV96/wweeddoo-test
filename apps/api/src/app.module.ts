import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { User } from './user/user.entity';
import { Project } from './project/project.entity';
import { Skill } from './skill/skill.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client'),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl:(process.env.NODE_ENV === 'production') && {
        rejectUnauthorized: false
      },
      url: (process.env.NODE_ENV === 'production') && process.env.DATABASE_URL, 
      entities: [User, Project, Skill],
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/mail/templates',
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    UserModule,
    SkillModule,
    AuthModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
