import { FC } from 'react'
import { Button, Container, Image, Stack } from 'react-bootstrap'

import { BackBtn } from 'src/components'
import { PayController } from 'src/lib'

import Rub from 'src/assets/rub.svg'

export const PayMode: FC<{ controller: PayController }> = ({ controller }) => {
  return (
    <Container className="min-vh-100 d-flex flex-column align-items-stretch p-3 py-4">
      <div className="text-center">
        <BackBtn onClick={controller.onUiBack} />
      </div>

      <div className="m-auto d-flex flex-column">
        <div
          className="d-flex bg-primary mb-3 rounded-5 mx-auto"
          style={{ height: '238px', width: '238px' }}
        >
          <Image src={Rub} className="m-auto" />
        </div>
        <h2>Выберите способ оплаты</h2>
      </div>

      <div className="mt-auto">
        <Stack gap={3}>
          <Button onClick={() => (controller.payMode = 'card')}>Карта</Button>
          <Button onClick={() => (controller.payMode = 'cash')} variant="light">
            Наличные
          </Button>
        </Stack>
      </div>
    </Container>
  )
}
