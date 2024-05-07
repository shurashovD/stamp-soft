import { ReactNode } from 'react'

import { coffee } from './coffee'
import { tea } from './tea'
import { milkshake } from './milkshake'
import { jucie } from './jucie'

import Kapuchino from 'src/assets/coffee/kapuchino.png'
import Tea from 'src/assets/tea/tea.png'
import Milkshake from 'src/assets/milkshake/milkshake.png'
import Jucie from 'src/assets/jucie/juice.png'

export type CategoryKey = 'coffee' | 'tea' | 'milkshake' | 'juice'

export type Category = {
  id: string | number
  key: CategoryKey
  title: string
  imgSrc?: ReactNode
}

export type Variant = {
  id: string | number
  description: string
  price: number
}

export type Product = {
  id: string | number
  title: string
  variants: Variant[]
  imgSrc?: ReactNode
  categoryId?: string | number
}

export const categories: Category[] = [
  { id: 1, title: 'Кофе', key: 'coffee', imgSrc: Kapuchino },
  { id: 2, title: 'Чай', key: 'tea', imgSrc: Tea },
  { id: 3, title: 'Молочный коктейль', key: 'milkshake', imgSrc: Milkshake },
  { id: 4, title: 'Морсы и газ. напитки', key: 'juice', imgSrc: Jucie },
]

export const products = [...coffee, ...tea, ...milkshake, ...jucie]
