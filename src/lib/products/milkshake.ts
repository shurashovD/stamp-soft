import { Product } from './products'

import Milkshake from 'src/assets/milkshake/milkshake.png'

export const milkshake: Product[] = [
  {
    id: 10,
    imgSrc: Milkshake,
    title: 'Без вкуса',
    variants: [{ id: 22, description: '300мл', price: 149 }],
  },
  {
    id: 11,
    imgSrc: Milkshake,
    title: 'Клубника',
    variants: [{ id: 23, description: '300мл', price: 169 }],
  },
  {
    id: 12,
    imgSrc: Milkshake,
    title: 'Банан',
    variants: [{ id: 24, description: '300мл', price: 169 }],
  },
].map(item => ({ ...item, categoryId: 3 }))
