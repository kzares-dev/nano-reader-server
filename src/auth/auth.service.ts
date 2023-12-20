import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { AuthDto } from './dto';
import { Model } from 'mongoose';
import * as argon from 'argon2';
import { User } from 'src/mongoose/user.model';

@Injectable({})
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>, // load the mongoose UserModel class
    ) { }

    async signup(dto: AuthDto) {
        // generate password hash
        const hash = await argon.hash(dto.password);
        // save the new user in db
        const newUser = new this.userModel({
            email: dto.email,
            password: hash,
        })
        const user = await newUser.save();
        //return saved user 
        // TODO: return JWT with the user info
        return user
    };

    async signin(dto: AuthDto) {
        // Find user by email
        const user = await this.userModel.findOne({ email: dto.email }).exec();

        if (!user) {
            // If user doesn't exist, throw exception
            throw new NotFoundException('User not found');
        }
        
        // Compare provided password with stored password
        const passwordMatch = await argon.verify(user.password, dto.password);

        if (!passwordMatch) {
            // If password is incorrect, throw exception
            throw new UnauthorizedException('Incorrect password');
        }

        // If user exists and password matches, return the user
        return user;
    };
}