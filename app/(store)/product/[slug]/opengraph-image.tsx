import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/products'
import { env } from '@/env'
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product | null> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    }
  })

  if (!response.ok) {
    return null
  }

  const product = await response.json()

  return product
}
 

export default async function OgImage({ params }: {params: {slug: string}}) {

    const { slug } = await params

    const product = await getProduct(slug)

    if (!product?.image) {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        Sem imagem
      </div>
    ),
    size
  )
}

    const productImageURL = new URL(
        product.image,
        env.APP_URL as string
    ).toString()

  return new ImageResponse(
    (
      <div
        style={{
         background: 'rgb(9, 9, 11)',
         width: '100%',
         height: '100%',
         display: 'flex',
         flexDirection: 'column'
        }}
      >
        <img src={productImageURL} alt='' style={{ width: '100%'}}/>
      </div>
    ),
    {
     
      ...size,
    }
    )
}
  
