import { createContext, useContext } from 'react'
import { AppController } from './lib/AppController'

export type AppContext = {
  appController: AppController
}

export const AppContext = createContext<AppContext | null>(null)

export const useAppContext = () => useContext(AppContext)!
