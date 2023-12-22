import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FileService } from './file.service';
import { JwtGuard } from 'src/guard';
import { FileDto } from './dto';

@UseGuards(JwtGuard)
@Controller('files')
export class FileController {

    constructor(private fileService: FileService) { }

    @Get('get/:fileId')
    getFile(
        @Param('fileId') fileId: string,
    ) {
        return this.fileService.getFile(fileId)
    };

    @Get('delete/:fileId')
    deleteFile(
        @Param('fileId') fileId: string,
    ) {
        return this.fileService.deleteFile(fileId)
    };

    @Post('create')
    createFile(@Body() dto: FileDto) {
        return this.fileService.createFile(dto)
    };

    @Post('edit/:fileId')
    editFile(
        @Body() dto: FileDto,
        @Param('fileId') fileId: string,
    ) {
        return this.fileService.editFile( fileId ,dto)
    };


}
