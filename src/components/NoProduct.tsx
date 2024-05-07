import { Container } from 'react-bootstrap'
import { BackBtn } from './BackBtn'
import { useNavigate } from 'react-router-dom'

export const NoProduct = () => {
  const navigate = useNavigate()

  return (
    <Container className="min-vh-100 d-flex flex-column align-items-stretch p-3 py-4">
      <div className="text-center">
        <BackBtn onClick={() => navigate('/')} />
      </div>

      <div className="m-auto d-flex flex-column">
        <h2>Продукт не выбран</h2>
      </div>
    </Container>
  )
}
