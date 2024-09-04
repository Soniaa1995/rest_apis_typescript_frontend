import { number, object, string, boolean, InferOutput, array } from "valibot"

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProdcutSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

export const ProductsSchema = array(ProdcutSchema)
export type Product = InferOutput<typeof ProdcutSchema>