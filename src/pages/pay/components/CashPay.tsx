import { FC } from 'react'
import { observer } from 'mobx-react'
import { Button, Container, Image } from 'react-bootstrap'

import { PayController } from '../../../lib/PayController'

import Img from '../../../assets/rub.svg'

const Invite = () => {
  return (
    <>
      <Image
        src={Img}
        fluid
        className="w-50 mb-5"
        style={{ maxWidth: '433px', maxHeight: '25vh' }}
      />
      <h2 className="text-center">
        Внесите деньги <br /> в купюроприёмник
      </h2>
      <p className="text-center">Автомат сдачи не выдаёт и деньги не возвращает</p>
    </>
  )
}

const Counter: FC<{ deposite: number; isDeposited: boolean }> = ({ deposite, isDeposited }) => {
  return (
    <>
      {isDeposited ? (
        <h2 className="text-center">Средства внесены</h2>
      ) : (
        <h2 className="text-center">Внесено {deposite} рублей</h2>
      )}
    </>
  )
}

export const CashPay: FC<{ controller: PayController }> = observer(({ controller }) => {
  return (
    <Container
      className="bg-primary vh-100 p-3 pb-4 d-flex flex-column align-items-center"
      fluid
      style={{ maxWidth: '1080px' }}
    >
      <div className="my-auto text-center">
        {controller.deposite ? (
          <Counter deposite={controller.deposite} isDeposited={controller.isDeposited} />
        ) : (
          <Invite />
        )}
      </div>
      <Button
        className="w-100 bg-white"
        onClick={controller.onUiBack}
        disabled={!controller.canCancell}
      >
        Отмена
      </Button>
    </Container>
  )
})
