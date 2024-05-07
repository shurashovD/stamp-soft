import { Container, Image } from 'react-bootstrap'

import Img from '../../../assets/drinkIsReady.svg'

export const DrinkIsReady = () => {
  return (
    <Container
      className="bg-primary vh-100 p-3 pb-4 d-flex flex-column align-items-center"
      fluid
      style={{ maxWidth: '1080px' }}
    >
      <Image
        src={Img}
        fluid
        className="w-50 mt-auto mb-5"
        style={{ maxWidth: '217px', maxHeight: '20vh' }}
      />
      <div className="mb-auto w-75">
        <h2 className="text-center w-100">Напиток готов!</h2>
        <h4 className="text-center w-100">вы можете забрать его</h4>
      </div>
    </Container>
  )
}
