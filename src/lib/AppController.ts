import { autorun, makeAutoObservable } from 'mobx'

import { Category, Product } from './products/products'
import { router } from './router'
import { PayController } from './PayController'
import { ShowCaseController } from './ShowCaseController'
import { CookController } from './CookController'

type Status = 'selectProduct' | 'paying' | 'cooking'

const STATUS_ROUTE: Record<Status, string> = {
  cooking: '/cooking',
  paying: '/pay',
  selectProduct: '/',
}

function navigate(path: string) {
  if (router.state.location.pathname !== path) {
    router.navigate(path)
  }
}

export class AppController {
  private _status: Status = 'selectProduct'

  private _showCaseController: ShowCaseController
  private _payController: PayController
  private _cookController: CookController

  constructor(categories: Category[], products: Product[]) {
    makeAutoObservable(this)

    this._showCaseController = new ShowCaseController(categories, products, this._onProductSelected)
    this._payController = new PayController()
    this._cookController = new CookController(this._onCookComplete, this._onCookCancel)

    router.subscribe(({ historyAction, location }) => {
      if (historyAction !== 'POP') {
        return
      }

      if (location.pathname === '/cooking') {
        this.status = 'cooking'
        return
      }

      if (location.pathname.startsWith('/pay')) {
        this.status = 'paying'
        return
      }

      this.status = 'selectProduct'
    })

    autorun(() => {
      navigate(STATUS_ROUTE[this._status] || '/')
    })
  }

  get payController() {
    return this._payController
  }

  get showCaseController() {
    return this._showCaseController
  }

  get cookController() {
    return this._cookController
  }

  private set status(status: Status) {
    this._status = status
    if (status === 'selectProduct') {
      this._showCaseController.reset()
      this._payController.reset()
      this._cookController.reset()
    }

    if (status === 'paying') {
      this._payController.reset()
      this._cookController.reset()
    }

    if (status === 'cooking') {
      this._cookController.reset()
    }
  }

  private _onProductSelected = () => {
    this.status = 'paying'
    const price = this._showCaseController.selectedProduct?.price
    if (price) {
      this._payController.start(price, this._onPayComplete, this._onPayCancel)
    } else {
      this.status = 'selectProduct'
    }
  }

  private _onPayComplete = () => {
    setTimeout(() => {
      this.status = 'cooking'
      this._payController.reset()

      const productId = this._showCaseController.selectedProduct?.id
      if (productId) {
        this._cookController.startCook(productId)
      }
    }, 2000)
  }

  private _onPayCancel = () => {
    this.status = 'selectProduct'
  }

  private _onCookComplete = () => {
    setTimeout(() => {
      this.status = 'selectProduct'
    }, 2000)
  }

  private _onCookCancel = () => {
    this.status = 'selectProduct'
  }
}
