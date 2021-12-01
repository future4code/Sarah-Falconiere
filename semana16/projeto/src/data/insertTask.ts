import { connection } from "..";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection('TodoListTask')
        .insert({
            id,
            title,
            description,
            limit_date: deadline,
            creator_user_id: authorId
        })
}