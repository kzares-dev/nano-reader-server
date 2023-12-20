import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: AuthDto ) { // dto is for type and field validations
        return this.authService.signup(dto);
    }

    @Post('signin')
    signIn(@Body() dto: AuthDto ) { // dto is for type and field validations
        return this.authService.signin(dto);
    }
}
