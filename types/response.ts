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
        user: UserResponse;
        accessToken: string;
        expireAt: string;
        refreshToken: string;
    }

      interface UserResponse {
        userId: number;
        phone: string;
        avatar: string;
        fullname: string;
        email: string;
        gender: string;
        dob: string;
        accountType: string;
        active: boolean;
        role: string;
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