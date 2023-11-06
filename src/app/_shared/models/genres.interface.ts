import { BaseType } from "@shared/models/base-type.interface";

export interface Genres {
    genres: Genre[];
}

export class Genre implements BaseType {
    constructor(
        public id: number,
        public name: string
    ) {}
}
