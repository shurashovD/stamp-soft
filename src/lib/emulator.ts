const bankCardPurchaseMessages = [
  'Приложите карту',
  'Обработка карты...',
  'Связь с банком...',
  'Оплачено',
]

export const emulator = {
  // eslint-disable-next-line
  bankCardHandler: (_: KeyboardEvent) => {},
  bankCardCancelRequested: false,
  bankCardPurchaseStep: 0,
  // eslint-disable-next-line
  cashInHandler: (_: KeyboardEvent) => {},
  // eslint-disable-next-line
  display_cb: (_: string) => {},
  StartCashin(cb: (amount: number) => void) {
    this.cashInHandler = ({ key }: KeyboardEvent) => {
      if (key === '1') {
        cb(10)
      }
    }

    document.addEventListener('keypress', this.cashInHandler)
  },
  StopCashin(cb: () => void) {
    document.removeEventListener('keypress', this.cashInHandler)

    // eslint-disable-next-line
    this.cashInHandler = (_: KeyboardEvent) => {}
    cb()
  },
  BankCardPurchase(
    _: number,
    cb: (result: boolean) => void,
    display_cb: (message: string) => void,
  ) {
    this.bankCardPurchaseStep = 0
    this.display_cb = display_cb
    display_cb(bankCardPurchaseMessages[this.bankCardPurchaseStep++])

    this.bankCardHandler = (event: KeyboardEvent) => {
      if (['0', '1'].includes(event.key)) {
        if (this.bankCardCancelRequested) {
          document.removeEventListener('keypress', this.bankCardHandler)
          cb(false)
          display_cb('Оплата отменена')
          this.bankCardCancelRequested = false

          return
        }

        if (event.key === '0') {
          document.removeEventListener('keypress', this.bankCardHandler)
          this.bankCardPurchaseStep = 0
          cb(false)
          display_cb('Ошибка оплаты')

          return
        }

        display_cb(bankCardPurchaseMessages[this.bankCardPurchaseStep++])

        if (this.bankCardPurchaseStep === bankCardPurchaseMessages.length) {
          document.removeEventListener('keypress', this.bankCardHandler)
          this.bankCardPurchaseStep = 0
          cb(true)
        }
      }
    }

    document.addEventListener('keypress', this.bankCardHandler)
  },
  BankCardCancel() {
    this.display_cb('Отмена оплаты')
    this.bankCardCancelRequested = true
  },
  Vend(_: number, cb: (result: boolean) => void) {
    const handler = (event: KeyboardEvent) => {
      if (event.key === '0') {
        cb(false)
        document.removeEventListener('keypress', handler)
      }

      if (event.key === '1') {
        cb(true)
        document.removeEventListener('keypress', handler)
      }
    }

    document.addEventListener('keypress', handler)
  },
}

export type Emulator = typeof emulator
