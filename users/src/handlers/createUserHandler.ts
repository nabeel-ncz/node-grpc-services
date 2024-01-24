import { createUserRequest } from "../lib/proto/userPackage/createUserRequest";
import { createUserResponse } from "../lib/proto/userPackage/createUserResponse";

export default async (
    { username, email, password }: createUserRequest
) => {
    //
    // User creation logic
    // Database logic
    console.log('create user handler');
    console.log(username, email, password);
    //
    //
    return { 
        success: true, 
        message: "User created!" 
    } as createUserResponse;
}