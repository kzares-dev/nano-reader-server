import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from 'src/mongoose/file.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])
  ],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
