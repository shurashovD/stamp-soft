import { Product } from './products'

import Jucie from 'src/assets/jucie/juice.png'

export const jucie: Product[] = [
  {
    id: 13,
    imgSrc: Jucie,
    title: 'Клюква',
    variants: [{ id: 25, description: '300мл', price: 99 }],
  },
  {
    id: 14,
    imgSrc: Jucie,
    title: 'Облепиха',
    variants: [{ id: 26, description: '300мл', price: 99 }],
  },
].map(item => ({ ...item, categoryId: 4 }))
