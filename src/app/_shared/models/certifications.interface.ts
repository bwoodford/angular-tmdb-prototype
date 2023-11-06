import { BaseClass } from "./base-type.interface";

export interface Certifications {
    certifications: RegionCertifications;
}

export interface RegionCertifications {
    [key: string]: Certification[]
}

export class Certification {
    constructor(
        public certification: string,
        public meaning: string,
        public order: number
    ) {}

    toBaseClass(): BaseClass {
        return new BaseClass(this.order, this.certification)
    }
}