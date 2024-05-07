import { FC } from 'react'
import { Button, Container, Image, Stack } from 'react-bootstrap'

import { PayController } from 'src/lib'

import Error from 'src/assets/error.svg'

export const ErrorPay: FC<{ controller: PayController }> = ({ controller }) => {
  return (
    <Container className="min-vh-100 d-flex flex-column align-items-stretch p-3 py-4 bg-error">
      <div className="m-auto d-flex flex-column">
        <Image src={Error} className="m-auto" width={334} />
        <h2 className="text-white">Оплата не прошла</h2>
      </div>

      <div className="mt-auto">
        <Stack gap={3}>
          <Button className="text-error bg-white" onClick={controller.restartCardPay}>
            Попробовать ещё раз
          </Button>
          <Button className="border text-white" variant="white" onClick={controller.onUiBack}>
            Отмена
          </Button>
        </Stack>
      </div>
    </Container>
  )
}
