import {Picture} from './picture.model.ts'

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    age: number;
    pictures: Picture[];
}

