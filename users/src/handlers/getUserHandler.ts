import { getUserRequest } from "../lib/proto/userPackage/getUserRequest";
import { getUserResponse } from "../lib/proto/userPackage/getUserResponse";

export default async (
    { id }: getUserRequest
) => {
    //
    // Database logic
    console.log('get user handler');
    console.log(id);
    //
    //
    return {
        username: "nabeel",
        email: "nabeel@web",
        password: "nabeel123"
    } as getUserResponse;
}