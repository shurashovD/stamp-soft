import { autorun, makeAutoObservable } from 'mobx'

import { Category, CategoryKey, Product } from './products/products'
import { ProductController } from './ProductController'

const DEFALT_SELECTED_CATEGORY_KEY = 'coffee'

export class ShowCaseController {
  private _categories: Category[]
  selectedCategoryKey: CategoryKey = DEFALT_SELECTED_CATEGORY_KEY

  private _products: ProductController[]
  private _selectedProduct: ProductController | null = null

  constructor(categories: Category[], products: Product[], onProductSelected: () => void) {
    makeAutoObservable(this, undefined, { autoBind: true })

    this._categories = categories
    this._products = products.map(item => new ProductController(item, this))

    autorun(() => {
      if (this._selectedProduct?.isReady) {
        onProductSelected()
      }
    })
  }

  getProductsByCategoryId(categoryId?: Category['id']) {
    if (categoryId) {
      return this._products.filter(item => item.categoryId && item.categoryId === categoryId)
    }

    return this._products.filter(({ categoryId }) => !categoryId)
  }

  get categories() {
    return this._categories.filter(({ id }) =>
      this._products.some(({ categoryId }) => categoryId === id),
    )
  }

  get selectedCategory() {
    return this._categories.find(({ key }) => key === this.selectedCategoryKey) || null
  }

  get selectedProduct() {
    return this._selectedProduct
  }

  set selectedProduct(product: ProductController | null) {
    this._selectedProduct = product ? new ProductController(product, this) : null
  }

  reset() {
    this._selectedProduct = null
  }
}
