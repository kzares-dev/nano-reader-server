import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
//password: jQZtfu0DWZcfxQNS

@Module({
  imports: [
    AuthModule, 
    UserModule,
    FileModule,
    //ConfigModule.forRoot({
    //  envFilePath: '.env',
    //}),
    MongooseModule.forRoot('mongodb+srv://kzaresdev:jQZtfu0DWZcfxQNS@nano-reader.ahqwcvt.mongodb.net/?retryWrites=true&w=majority'),
  ] 
  ,
})
export class AppModule { }
