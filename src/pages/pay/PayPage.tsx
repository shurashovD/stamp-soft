import { Container, Tab } from 'react-bootstrap'
import { observer } from 'mobx-react'

import { useAppContext } from '../../context'

import { PayMode } from './components/PayMode'
import { CardPay } from './components/CardPay'
import { CashPay } from './components/CashPay'
import { NoProduct } from 'src/components'
import { ErrorPay } from './components/ErrorPay'

export const PayPage = observer(() => {
  const { appController } = useAppContext()
  const { payController } = appController

  return (
    <Container className="min-vh-100 p-0" fluid style={{ maxWidth: '1080px' }}>
      <Tab.Content>
        <Tab.Pane active={payController.activeView === 'payModeSelect'}>
          <PayMode controller={payController} />
        </Tab.Pane>
        <Tab.Pane active={payController.activeView === 'payCard'}>
          <CardPay controller={payController} />
        </Tab.Pane>
        <Tab.Pane active={payController.activeView === 'payCash'}>
          <CashPay controller={payController} />
        </Tab.Pane>
        <Tab.Pane active={payController.activeView === 'payIsWrong'}>
          <ErrorPay controller={payController} />
        </Tab.Pane>
        <Tab.Pane active={payController.activeView === 'idle'}>
          <NoProduct />
        </Tab.Pane>
      </Tab.Content>
      <div className="position-fixed bg-primary rounded-5 top-0 start-0 p-4 px-5 m-2">
        <h5>Кнопки клавиатуры</h5>
        <p>"1" - действие выполнено успешно</p>
        <p>"0" - ошибка</p>
        <p>Подтверждаются все действия и отмена тоже</p>
        <p>"1" - положить 10 рублей в налиной оплате</p>
      </div>
    </Container>
  )
})
