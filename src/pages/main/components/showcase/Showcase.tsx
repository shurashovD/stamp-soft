import { observer } from 'mobx-react'

import { useAppContext } from 'src/context'

import { Content } from './Content'
import { CategorySelectItem } from './CategorySelectItem'
import { VariantSelector } from './VariantSelector'

export const ShowCase = observer(() => {
  const { appController } = useAppContext()
  const showCaseController = appController.showCaseController

  return (
    <div
      className="bg-light rounded rounded-5 rounded-bottom-0 mt-auto no-scroll-line"
      style={{ height: 'calc(100vh - 171px - 64px)', overflow: 'scroll' }}
    >
      <div className="showcase-category-container">
        {showCaseController.categories.map(item => (
          <CategorySelectItem category={item} constroller={showCaseController} />
        ))}
      </div>
      <Content controller={showCaseController} />
      <VariantSelector controller={showCaseController.selectedProduct} />
    </div>
  )
})
