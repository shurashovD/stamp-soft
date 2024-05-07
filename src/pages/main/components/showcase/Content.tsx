import { FC } from 'react'
import { observer } from 'mobx-react'
import { Col, Container, Row, Tab } from 'react-bootstrap'

import { ShowCaseController } from 'src/lib/ShowCaseController'

import { ProductCard } from './ProductCard'
import { Title } from './Title'

export const Content: FC<{ controller: ShowCaseController }> = observer(({ controller }) => {
  return (
    <div
      className="bg-white rounded rounded-top-5 mt-auto pt-6 position-relative"
      style={{ top: '-25px' }}
    >
      <Tab.Content>
        {controller.categories.map(({ id, key, title }) => (
          <Tab.Pane title={title} key={key} active={controller.selectedCategoryKey === key}>
            <div className="mb-5">
              <Title category={controller.selectedCategory} />
            </div>
            <Container>
              <Row className="row-cols-3">
                {controller.getProductsByCategoryId(id).map(item => (
                  <Col className="pb-3" key={item.id}>
                    <ProductCard product={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </div>
  )
})
