import { makeAutoObservable } from 'mobx'

import { emulator } from './emulator'

type Status = 'idle' | 'inProgress' | 'isSuccess' | 'isWrong'

export class CookController {
  private _emulator = emulator
  private _onComplete: (() => void) | null = null
  private _onCancel: (() => void) | null = null
  private _status: Status = 'idle'

  constructor(onComplete: () => void, onCancel: () => void) {
    makeAutoObservable(this)

    this._onComplete = onComplete
    this._onCancel = onCancel
  }

  private _vEndHandler = (result: boolean) => {
    if (result) {
      this._status = 'isSuccess'
      this._onComplete?.()
    } else {
      this._status = 'isWrong'
    }
  }

  get status() {
    return this._status
  }

  onUiBack = () => {
    this._onCancel?.()
  }

  startCook(productId: string | number) {
    this._emulator.Vend(+productId, this._vEndHandler)
    this._status = 'inProgress'
  }

  reset = () => {
    this._status = 'idle'
  }
}
