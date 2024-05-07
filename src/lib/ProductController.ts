import { makeAutoObservable } from 'mobx'

import { Product, Variant } from './products/products'
import { ShowCaseController } from './ShowCaseController'

export class ProductController implements Product {
  private _isReady: boolean = false
  private _product: Product
  private _showCaseController: ShowCaseController
  selectedVariant: Variant | null = null

  constructor(product: Product, showCaseController: ShowCaseController) {
    makeAutoObservable(this)

    this._product = product
    this._showCaseController = showCaseController

    if (product.variants.length === 1) {
      this.selectedVariant = product.variants[0]
    }
  }

  get canSubmit() {
    return typeof this.selectedVariant?.price !== 'undefined'
  }

  get isReady() {
    return this._isReady
  }

  get price() {
    return this.selectedVariant?.price
  }

  get categoryId() {
    return this._product.categoryId
  }

  get id() {
    return this._product.id
  }

  get imgSrc() {
    return this._product.imgSrc
  }

  get showVariantSelector() {
    return !this.selectedVariant
  }

  get title() {
    return this._product.title
  }

  get variants() {
    return this._product.variants.map(item => ({
      ...item,
      isSelected: item.id === this.selectedVariant?.id,
    }))
  }

  onClose = () => {
    this._showCaseController.selectedProduct = null
  }

  select = () => {
    this._showCaseController.selectedProduct = this
  }

  submit = () => {
    if (typeof this.selectedVariant?.price !== 'undefined') {
      this._isReady = true
    }
  }
}
