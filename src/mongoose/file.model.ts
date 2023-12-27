import * as mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },

    fileUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isFavorite: {
        type: Boolean,
        default: false,
    }
})

export interface File {
    id: string,
    title: string,
    author: string,
    fileUrl: string,
    imageUrl: string,
    userId: string,
    isFavorite: boolean,
}
