import { Controller, Get, UseGuards } from "@nestjs/common";
import { GetUser } from "src/decorator";
import { JwtGuard } from "src/guard";
import { User } from "src/mongoose/user.model";

@UseGuards(JwtGuard) // using global guard to verify jwt
@Controller('users')
export class UserController {

    @Get('me')
    getMe(@GetUser('') user: User) {
        return user
    }
}