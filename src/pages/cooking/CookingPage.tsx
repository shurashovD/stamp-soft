import { observer } from 'mobx-react'

import { useAppContext } from 'src/context'

import { DrinkInProcess } from './components/DrinkInProcess'
import { DrinkIsReady } from './components/DrinkIsReady'
import { ErrorCooking } from './components/ErrorCooking'

export const CookingPage = observer(() => {
  const { appController } = useAppContext()
  const { cookController } = appController

  return (
    <>
      {cookController.status === 'idle' && <h3>Напиток не выбран</h3>}
      {cookController.status === 'inProgress' && <DrinkInProcess />}
      {cookController.status === 'isSuccess' && <DrinkIsReady />}
      {cookController.status === 'isWrong' && <ErrorCooking controller={cookController} />}
    </>
  )
})
