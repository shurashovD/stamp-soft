import { Container } from 'react-bootstrap'
import { observer } from 'mobx-react'

import { CategoryKey } from 'src/lib'
import { Header, ShowCase } from './components'
import { useAppContext } from 'src/context'

function getBgClassName(key?: CategoryKey) {
  const productClassMatcher: Record<CategoryKey, string> = {
    coffee: 'bg-coffee',
    juice: 'bg-jucie',
    milkshake: 'bg-milkshake',
    tea: 'bg-tea',
  }

  if (key) {
    return productClassMatcher[key] || 'bg-light'
  }

  return 'bg-light'
}

export const MainPage = observer(() => {
  const { appController } = useAppContext()
  const { showCaseController } = appController

  return (
    <Container
      className={`${getBgClassName(showCaseController.selectedCategory?.key)} main-page-bgi p-0`}
      fluid
      style={{ maxWidth: '1080px', height: '100vh' }}
    >
      <Header />
      <ShowCase />
    </Container>
  )
})
