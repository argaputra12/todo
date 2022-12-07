import { Document } from 'mongoose';

export interface Todo extends Document {
    title: string;
    description: string;
    status: string;
}