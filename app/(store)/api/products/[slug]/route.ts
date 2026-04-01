import z from 'zod'
import data from '../data.json'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    {params}: {params: Promise<{slug: string}> }
) {

    const { slug } =  await params

    const parsedSlug = z.string().parse(slug)

    const product = data.products.find((product) => product.slug === parsedSlug)

    if(!product) {
        return Response.json({message: 'Product not found'}, {status: 404})
    }

    return Response.json(product)
}

