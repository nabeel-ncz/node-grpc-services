import { loginUserRequest } from "../lib/proto/userPackage/loginUserRequest";
import { loginUserResponse } from "../lib/proto/userPackage/loginUserResponse";

export default async (
    { email, password }: loginUserRequest
) => {
    //
    // Database logic
    console.log('login user handler');
    console.log(email, password);
    //
    //
    return { 
        success: true, 
        message: "User logged-in!" 
    } as loginUserResponse;
}