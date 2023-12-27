import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class FileDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    fileUrl: string;

    @IsNotEmpty()
    @IsString()
    imageUrl: string;
   
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsBoolean()
    isFavorite: boolean
}