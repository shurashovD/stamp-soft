import { FC } from 'react'
import { observer } from 'mobx-react'
import { Image } from 'react-bootstrap'

import { CategoryCircle } from 'src/components'
import { Category as TCategory, ShowCaseController } from 'src/lib'

type Props = {
  category: TCategory
  constroller: ShowCaseController
}

export const CategorySelectItem: FC<Props> = observer(({ category, constroller }) => {
  const { key, title, imgSrc } = category
  const checked = constroller.selectedCategoryKey === category.key

  return (
    <button
      onClick={() => (constroller.selectedCategoryKey = key)}
      className={`showcase-category__btn position-relative ${
        checked && 'showcase-category-selected__btn'
      }`}
    >
      {imgSrc && (
        <>
          <Image src={imgSrc as string} height={200} style={{ zIndex: 1 }} />
          {checked && (
            <div className="position-absolute" style={{ top: '50px' }}>
              <CategoryCircle categoryKey={key} diametr={161} />
            </div>
          )}
        </>
      )}
      {title}
    </button>
  )
})
