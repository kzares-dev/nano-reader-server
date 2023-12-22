import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from 'src/mongoose/file.model';
import { FileDto } from './dto';

@Injectable({})
export class FileService {

    constructor(
        @InjectModel('File') private readonly fileModel: Model<File> // load the mongoose UserModel class
    ) { }

    async getFile(fileId: string) {

        // Get the file based on id
        try {
            const file = await this.fileModel.findById(fileId);

            if (!file) {
                throw new NotFoundException('File not found');
            }
            // returning the given file
            return file
        } catch {
            throw new NotFoundException('File not found');
        }

    };

    async deleteFile(fileId: string) {
        try {
            // Find the file by ID and delete it
            const deletedFile = await this.fileModel.findByIdAndDelete(fileId);

            // If the file does not exist, throw an error
            if (!deletedFile) {
                throw new NotFoundException('File not found');
            }

            // Return the deleted file
            return deletedFile;
        } catch {
            // Handle any errors that occur, for example, throw an exception
            throw new NotFoundException('File not found');
        }
    }

    async createFile(dto: FileDto) {

        // save the new file in db
        const newFile = new this.fileModel({
            ...dto
        })
        const file = await newFile.save();
        return file
    };


    async editFile(fileId: string, dto: FileDto) {
        try {
            // Find the file by ID and update it with the new data
            const editedFile = await this.fileModel.findByIdAndUpdate(fileId, dto, { new: true, runValidators: true });

            // If the file does not exist, throw an error
            if (!editedFile) {
                throw new NotFoundException('File not found');
            }

            // Return the edited file
            return editedFile;
        } catch (error) {
            // Handle any errors that occur, for example, throw an exception
            throw new Error('An error occurred while editing the file: ' + error);
        }
    }



}
