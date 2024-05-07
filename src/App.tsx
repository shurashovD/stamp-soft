import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AppContext } from './context'
import { AppController, router } from './lib'
import { categories, products } from './lib/products/products'

function App() {
  const [contextValue] = useState<AppContext>({
    appController: new AppController(categories, products),
  })

  return (
    <AppContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
