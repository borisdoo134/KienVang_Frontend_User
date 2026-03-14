export { }
declare global {
     interface RegisterRequest {
        name: string;
        email: string;
        password: string;
    }
     interface ForgetPasswordRequest {
        email: string;
    }

    interface ChangePasswordRequest {
        code: string;
        password: string;
    }

       interface CredentialsLoginRequest {
        email: string;
        password: string;
    }

    
    interface SocialsLoginRequest {
        fullname: string;
        avatar: string;
        email: string;
        accountType: string;
    }
}