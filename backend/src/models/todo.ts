import {model, Schema} from 'mongoose';
import { Todo } from '../types/todo';

const todoSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: Boolean, required: true},
    }, {
    timestamps: true,
    });

export default model<Todo>('TodoModel', todoSchema);