import { makeAutoObservable } from 'mobx'

import { emulator } from './emulator'

type ActiveView = 'idle' | 'payModeSelect' | 'payCard' | 'payCash' | 'payIsWrong'
type PayMode = 'card' | 'cash'
type PayStatus = 'idle' | 'payInProgress' | 'cancelInProgress' | 'payIsWrong' | 'payIsSuccess'

export class PayController {
  private _deposite = 0
  private _payMode: PayMode | null = null
  private _status: PayStatus = 'idle'
  private _emulator = emulator
  private _message = ''
  private _onComplete: (() => void) | null = null
  private _onCancel: (() => void) | null = null
  private _targetAmount: number | null = null

  constructor() {
    makeAutoObservable(this)
  }

  get message() {
    return this._message
  }

  get activeView(): ActiveView {
    if (
      ['payInProgress', 'payIsSuccess', 'cancelInProgress'].includes(this._status) &&
      this._payMode
    ) {
      return this._payMode === 'card' ? 'payCard' : 'payCash'
    }

    if (this._status === 'payIsWrong') {
      return 'payIsWrong'
    }

    if (this._status === 'idle' && this._targetAmount) {
      return 'payModeSelect'
    }

    return 'idle'
  }

  get canCancell() {
    return !['payIsSuccess', 'payIsWrong', 'cancelInProgress'].includes(this._status)
  }

  get deposite() {
    return this._deposite
  }

  get isDeposited() {
    return !!this._targetAmount && this._deposite >= this._targetAmount
  }

  set payMode(mode: PayMode | null) {
    this._message = ''
    this._payMode = mode

    if (!this._targetAmount) {
      this.status = 'idle'
      return
    }

    if (mode === 'card') {
      this._startCardPay(this._targetAmount)
    }

    if (mode === 'cash') {
      this._startCashPay()
    }
  }

  private set status(status: PayStatus) {
    this._status = status

    if (status === 'payIsSuccess') {
      this._onComplete?.()
    }
  }

  private _bankCardPurchaseMessageHandler = (message: string) => {
    this._message = message
  }

  private _bankCardPurchaseHandler = (result: boolean) => {
    if (result) {
      this.status = 'payIsSuccess'
    } else {
      if (this._status === 'cancelInProgress') {
        setTimeout(() => {
          this.status = 'idle'
        }, 3000)
      } else {
        this.status = 'payIsWrong'
      }
    }
  }

  private _cashInHandler = (amount: number) => {
    this._deposite += amount
    if (this.isDeposited) {
      this._emulator.StopCashin(() => {})
      this.status = 'payIsSuccess'
    }
  }

  onUiBack = () => {
    if (this._status === 'idle') {
      this._onCancel?.()
      this.reset()
      return
    }

    if (this._status === 'payInProgress') {
      if (this._payMode === 'card') {
        this._cancelPay()
        return
      }

      this._emulator.StopCashin(() => {})
      this.status = 'idle'
    }

    if (this._status === 'payIsWrong') {
      if (this._payMode === 'card') {
        this._onCancel?.()
        this.reset()
        return
      }
    }
  }

  restartCardPay = () => {
    this.payMode = 'card'
  }

  start(amount: number, onComplete: () => void, onCancel: () => void) {
    this._targetAmount = amount
    this._onComplete = onComplete
    this._onCancel = onCancel
  }

  private _startCardPay = (amount: number) => {
    this._emulator.BankCardPurchase(
      amount,
      this._bankCardPurchaseHandler,
      this._bankCardPurchaseMessageHandler,
    )

    this.status = 'payInProgress'
  }

  private _startCashPay = () => {
    this.status = 'payInProgress'
    this._emulator.StartCashin(this._cashInHandler)
  }

  private _cancelPay = () => {
    this.status = 'cancelInProgress'
    this._emulator.BankCardCancel()
  }

  reset() {
    this._deposite = 0
    this._payMode = null
    this._status = 'idle'
    this._message = ''
    this._targetAmount = null
  }
}
