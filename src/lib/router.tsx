import { createBrowserRouter } from 'react-router-dom'

import { MainPage } from '../pages/main/MainPage'
import { CookingPage } from '../pages/cooking/CookingPage'
import { PayPage } from '../pages/pay/PayPage'

export const router = createBrowserRouter([
  {
    Component: MainPage,
    path: '/',
  },
  {
    Component: PayPage,
    path: '/pay',
  },
  {
    Component: CookingPage,
    errorElement: <h3>Ошибка</h3>,
    path: '/cooking',
  },
])
