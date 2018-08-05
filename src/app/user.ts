export class User {
    constructor(
        public name: string,
        public dateofbirth: string,
        public salary: number,
        public email: string, 
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean,
    ) {}
}
