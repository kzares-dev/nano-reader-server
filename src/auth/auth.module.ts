import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from 'src/mongoose/user.model'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategy'

@Module({
    imports: [
        JwtModule.register({}),
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
        // TODO: Congig module import 
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule { }