import { Product } from './products'

import Tea from 'src/assets/tea/tea.png'

export const tea: Product[] = [
  {
    id: 7,
    imgSrc: Tea,
    title: 'Чёрный',
    variants: [{ id: 19, description: '200мл', price: 49 }],
  },
  {
    id: 8,
    imgSrc: Tea,
    title: 'Зелёный',
    variants: [{ id: 20, description: '200мл', price: 49 }],
  },
  {
    id: 9,
    imgSrc: Tea,
    title: 'С чабрецом',
    variants: [{ id: 21, description: '200мл', price: 49 }],
  },
].map(item => ({ ...item, categoryId: 2 }))
