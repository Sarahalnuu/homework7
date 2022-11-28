import {z} from 'zod'

export const getBooksSchema = z.object({
    body: z.object ({
        id: z.string ({ invalid_type_error: 'id must be a string'}).min(3),
        name: z.string ({ invalid_type_error: 'name must be a string'}).min(5),
        genre: z.string({ invalid_type_error: 'name must be a string'}).min(3)
    }),
})