import { FC } from 'react'

import { Category } from 'src/lib/products/products'
import { CategoryCircle } from 'src/components'

type Props = { category: Category | null }

const DIAMETR = '147px'

export const Title: FC<Props> = ({ category }) => {
  return (
    <div className="position-relative overflow-hidden" style={{ minHeight: DIAMETR }}>
      {category && (
        <div className="position-relative">
          <CategoryCircle diametr={147} categoryKey={category.key} />
        </div>
      )}
      <h1 className="position-absolute translate-middle-y" style={{ left: '17px', top: '47%' }}>
        {category?.title || 'Выберите напиток'}
      </h1>
    </div>
  )
}
