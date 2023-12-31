import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('signup')
    async signup(@Body() dto: AuthDto) { // dto is for type and field validations
        return this.authService.signup(dto)
    }


    @Post('signin')
    async signIn(@Body() dto: AuthDto) { // dto is for type and field validations
        return this.authService.signin(dto)
        
    }
}
