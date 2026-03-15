export { }
declare global {

     interface ApiResponse<T> {
        status: number;
        errorMessage: string;
        message: object;
        data: T;
    }
     interface ErrorResponse {
        error: boolean;
        value: string;
        message?: string;
    }   
    
     interface LoginResponse {
        user: AccountResponse;
        accessToken: string;
        expireAt: string;
        refreshToken: string;
    }

      interface AccountResponse {
        accountId: number;
        phone: string;
        avatar: string;
        name: string;
        email: string;
        gender: string;
        dob: string;
        accountType: string;
        active: boolean;
        roleName: string;
        position: string;
    }

    interface SystemResponse {
        settingKey: string;
        settingValue: string;
    }

    interface CustomerAmount {
        amounts: number;
        urlAvatars: string[]
    }
}