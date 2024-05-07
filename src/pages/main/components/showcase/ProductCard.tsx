import { FC } from 'react'
import { Image } from 'react-bootstrap'

import { ProductController } from '../../../../lib/ProductController'

type Props = {
  product: ProductController
}

const { format } = new Intl.NumberFormat('ru', {
  currency: 'RUB',
  style: 'currency',
  maximumFractionDigits: 0,
})

export const ProductCard: FC<Props> = ({ product }) => {
  const getMinPrice = () => {
    try {
      return Math.min(...product.variants.map(({ price }) => price))
    } catch (e) {
      return 0
    }
  }

  return (
    <div
      className="border border-1 border-gray rounded rounded-4 pb-4 cursor-pointer text-center h-100 d-flex flex-column"
      onClick={product.select}
    >
      {product.imgSrc && (
        <Image src={product.imgSrc as string} alt={product.title} className="img-fluid rounded-4" />
      )}
      <h4 className="text-center mt-auto">{product.title}</h4>
      <b className="w-100 fs-3">
        от <span>{format(getMinPrice())}</span>
      </b>
    </div>
  )
}
