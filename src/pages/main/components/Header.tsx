import { Col, Container, Row } from 'react-bootstrap'

import Icon from '../../../assets/call.svg'

export const Header = () => {
  return (
    <Container fluid>
      <Row style={{ minHeight: '235px' }} className="pb-6">
        <Col xs className="mh-100 d-flex align-items-end">
          <h2 style={{ lineHeight: '71px' }}>Выбор напитка</h2>
        </Col>
        <Col xs="auto" className="mh-100 d-flex align-items-end">
          <a
            className="d-flex align-items-center bg-white text-black bg-white rounded-4"
            href="/"
            style={{ minWidth: '392px' }}
          >
            <span
              className="bg-primary rounded-4 d-flex justify-content-center"
              style={{ minWidth: '103px', height: '103px' }}
            >
              <img src={Icon} alt="call" width="47.66" />
            </span>
            <span className="mx-3 text-center w-100" style={{ fontSize: '24px' }}>
              Вход / регистрация
            </span>
          </a>
        </Col>
      </Row>
    </Container>
  )
}
