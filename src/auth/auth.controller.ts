import { Body, Controller, Post, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { response } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() dto: AuthDto, @Response() res: Res) { // dto is for type and field validations
        const { access_token } = await this.authService.signup(dto)
        return res.set({ 'Authorization': `Bearer ${access_token}` }).json({ access_token });

    }


    @Post('signin')
    async signIn(@Body() dto: AuthDto, @Response() res: Res) { // dto is for type and field validations
        const { access_token } = await this.authService.signin(dto)
        return res.set({ 'Authorization': `Bearer ${access_token}` }).json({ access_token });
    }
}
