export class Candidate {
    constructor(
        public name:string,
        public email:string,
        public phone: number,
        public company:string,
        public locationPreference: string,
        public subscribe: boolean
    ){}
}
