import { FC } from 'react'
import { Button, Container, Image } from 'react-bootstrap'

import Img from 'src/assets/warn.svg'
import { CookController } from 'src/lib/CookController'

export const ErrorCooking: FC<{ controller: CookController }> = ({ controller }) => {
  return (
    <Container
      className="bg-danger vh-100 p-3 pb-4 d-flex flex-column justify-content-center align-items-center"
      fluid
      style={{ maxWidth: '1080px' }}
    >
      <Image
        src={Img}
        fluid
        className="w-50 mt-auto mb-5"
        style={{ maxWidth: '217px', maxHeight: '20vh' }}
      />
      <h2 className="text-center mb-auto text-white">
        Данного напитка <br /> нет в наличии
      </h2>
      <Button className="w-100 bg-white" onClick={controller.onUiBack}>
        Отмена
      </Button>
    </Container>
  )
}
