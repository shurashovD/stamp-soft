import { FC } from 'react'
import { observer } from 'mobx-react'
import { Button, Container, Image } from 'react-bootstrap'

import { PayController } from '../../../lib/PayController'

import Img from '../../../assets/card.svg'

export const CardPay: FC<{ controller: PayController }> = observer(({ controller }) => {
  return (
    <Container
      className="bg-primary vh-100 p-3 pb-4 d-flex flex-column align-items-center"
      fluid
      style={{ maxWidth: '1080px' }}
    >
      <Image src={Img} fluid className="w-50 mt-auto mb-5" style={{ maxWidth: '433px' }} />
      <div className="mb-auto w-75">
        <h2 className="text-center w-100">{controller.message}</h2>
      </div>
      <Button
        className="mt-auto w-100 bg-white"
        disabled={!controller.canCancell}
        onClick={controller.onUiBack}
      >
        Отмена
      </Button>
    </Container>
  )
})
