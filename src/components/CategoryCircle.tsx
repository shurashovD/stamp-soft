import { FC } from 'react'
import { CategoryKey } from 'src/lib'

type Props = {
  diametr: number
  categoryKey: CategoryKey
}

function getBgClassName(key: CategoryKey) {
  const productClassMatcher: Record<CategoryKey, string> = {
    coffee: 'bg-coffee',
    juice: 'bg-jucie',
    milkshake: 'bg-milkshake',
    tea: 'bg-tea',
  }

  return productClassMatcher[key] || 'bg-light'
}

export const CategoryCircle: FC<Props> = ({ diametr, categoryKey }) => {
  return (
    <div
      className={`${getBgClassName(categoryKey)}`}
      style={{ width: `${diametr}px`, height: `${diametr}px`, borderRadius: '100%', left: '-20px' }}
    />
  )
}
