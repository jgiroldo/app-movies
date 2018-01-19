export class LoginModel {
    username: string;
    password: string;

    constructor(lm: any) {
        this.username = lm.username;
        this.password = lm.password;
    }
}
