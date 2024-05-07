import { Product } from './products'

import Espresso from 'src/assets/coffee/espresso.png'
import Espresso2 from 'src/assets/coffee/espresso2.png'
import Amerikano from 'src/assets/coffee/amerikano.png'
import Kapuchino from 'src/assets/coffee/kapuchino.png'
import Latte from 'src/assets/coffee/latte.png'
import Makiato from 'src/assets/coffee/makiato.png'

export const coffee: Product[] = [
  {
    id: 7,
    imgSrc: Espresso,
    title: 'Эспрессо',
    variants: [
      { id: 1, description: '200мл', price: 79 },
      { id: 2, description: '300мл', price: 89 },
      { id: 3, description: '400мл', price: 99 },
    ],
  },
  {
    id: 2,
    imgSrc: Espresso2,
    title: 'Эспрессо',
    variants: [
      { id: 4, description: '200мл', price: 109 },
      { id: 5, description: '300мл', price: 119 },
      { id: 6, description: '400мл', price: 129 },
    ],
  },
  {
    id: 3,
    imgSrc: Amerikano,
    title: 'Американо',
    variants: [
      { id: 7, description: '200мл', price: 119 },
      { id: 8, description: '300мл', price: 129 },
      { id: 9, description: '400мл', price: 139 },
    ],
  },
  {
    id: 4,
    imgSrc: Latte,
    title: 'Латте',
    variants: [
      { id: 10, description: '200мл', price: 129 },
      { id: 11, description: '300мл', price: 139 },
      { id: 12, description: '400мл', price: 149 },
    ],
  },
  {
    id: 5,
    imgSrc: Kapuchino,
    title: 'Капучино',
    variants: [
      { id: 13, description: '200мл', price: 129 },
      { id: 14, description: '300мл', price: 139 },
      { id: 15, description: '400мл', price: 149 },
    ],
  },
  {
    id: 6,
    imgSrc: Makiato,
    title: 'Макиато',
    variants: [
      { id: 16, description: '200мл', price: 129 },
      { id: 17, description: '300мл', price: 139 },
      { id: 18, description: '400мл', price: 149 },
    ],
  },
].map(item => ({ ...item, categoryId: 1 }))
