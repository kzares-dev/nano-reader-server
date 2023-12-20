import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose'
//password: jQZtfu0DWZcfxQNS

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://kzaresdev:jQZtfu0DWZcfxQNS@nano-reader.ahqwcvt.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}
