export interface BaseType {
    id: number;
    name: string;
}

export class BaseClass implements BaseType {
    constructor(
        public id: number,
        public name: string,
    ) {}
}
