import { getAllBooksResponse } from "../lib/proto/bookPackage/getAllBooksResponse";

export default async () => {
    //
    // Database logic
    console.log('get all books handler');
    //
    //
    return [
        {
            userId: "user1",
            title: "book1",
            description: "book1_description",
            price: 400
        },
        {
            userId: "user2",
            title: "book2",
            description: "book2_description",
            price: 600
        }
    ] as getAllBooksResponse;
}