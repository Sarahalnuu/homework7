import {z} from 'zod'

export const getLoanSchema = z.object({
    body: z.object ({
        id: z.string ({ invalid_type_error: 'id must be a string'}).min(3),
        book_id: z.string ({ invalid_type_error: 'book must be a string'}),
        user_id: z.string({ invalid_type_error: 'user must be a string'})
    }),
})