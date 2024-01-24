import { createBookRequest } from "../lib/proto/bookPackage/createBookRequest";
import { createBookResponse } from "../lib/proto/bookPackage/createBookResponse"

export default async (
    { userId, title, description, price }: createBookRequest
) => {
    //
    // User creation logic
    // Database logic
    console.log('create book handler');
    console.log(userId, title, description, price);
    //
    //
    return {
        success: true,
        message: "Book created!"
    } as createBookResponse;
}