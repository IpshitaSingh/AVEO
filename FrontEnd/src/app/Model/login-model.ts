export class LoginModel { 
    constructor(
        public email:string,
        public pwd?:string,
        public remember?:boolean
    ){}
}

