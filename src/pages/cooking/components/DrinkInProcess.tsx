import { Container } from 'react-bootstrap'

export const DrinkInProcess = () => {
  return (
    <Container
      className="vh-100 p-3 pb-4 d-flex flex-column justify-content-center align-items-center bg-primary"
      fluid
      style={{ maxWidth: '1080px' }}
    >
      <h3 className="position-absolute top-50 left-50 translate-center">Приготовление напитка</h3>
      <div className="position-fixed bg-primary rounded-5 top-0 start-0 p-4 px-5 m-2">
        <h5>Кнопки клавиатуры</h5>
        <p>"1" - действие выполнено успешно</p>
        <p>"0" - ошибка</p>
        <p>Подтверждаются все действия и отмена тоже</p>
        <p>"1" - положить 10 рублей в налиной оплате</p>
      </div>
    </Container>
  )
}
