// import { Request, Response } from "express"


// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const users = await selectAllUsers()

//         if (!users.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(users)

//     } catch (error) {
//         console.log(error)
//         res.send(error)
//     }
// }