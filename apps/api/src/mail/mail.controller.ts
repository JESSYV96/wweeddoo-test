import { Controller, Post } from '@nestjs/common';

@Controller('mail')
export class MailController {

    @Post('firstContact')
    sendFirstContactEmail() {
        return "sent"
    }
}
