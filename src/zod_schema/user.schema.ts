import {z} from 'zod'

export const getUserSchema = z.object({
    body: z.object ({
        id: z.string ({ invalid_type_error: 'id must be a string'}).min(3),
        username: z.string ({ invalid_type_error: 'username must be a string'}).min(5),
        password: z.string().regex(new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])"), 
        "Passwor must contain at least 1 upper case, lower case, numeric, and special character"),
    }),
})