import { FC } from 'react'
import { Button, Col, Container, Fade, Image, Row, Stack } from 'react-bootstrap'
import { observer } from 'mobx-react'

import { ProductController } from 'src/lib'

import Cap from 'src/assets/grayCap.svg'

export const VariantSelector: FC<{ controller: ProductController | null }> = observer(
  ({ controller }) => {
    if (!controller) {
      return null
    }

    return (
      <Container
        className="position-fixed top-0 bottom-0 start-0 end-0 p-0 z-1 vh-100 backdrop"
        style={{ maxWidth: '1080px' }}
      >
        <div
          className="d-flex flex-column bg-white position-absolute bottom-0 start-0 end-0 rounded-top-5 no-scroll-line"
          style={{ maxHeight: '90vh', overflowY: 'scroll' }}
        >
          <div className="p-5 pt-0 d-flex flex-column flex-grow-1">
            <div className="align-self-center">
              <Button
                style={{ width: '333px', height: '159px' }}
                className="m-0 p-0 bg-light border-gray text-gray rounded-0 rounded-bottom-5"
                onClick={controller.onClose}
              >
                <div className="fs-1 rotate-45">+</div>
              </Button>
            </div>

            <div className="d-flex flex-column align-items-center">
              {controller.imgSrc && (
                <Image
                  src={controller.imgSrc as string}
                  alt={controller.title}
                  style={{ maxWidth: '367px', maxHeight: '539px' }}
                />
              )}
              <h1 className="text-center mt-auto">{controller.title}</h1>
            </div>
            <Stack gap={3}>
              <Row className="row-cols-3">
                {controller.variants.map(item => (
                  <Col key={item.id}>
                    <Button
                      className={`bg-${
                        item.isSelected ? 'primary' : 'light'
                      } rounded-4 py-5 d-flex flex-column align-items-center border-0 w-100 h-100`}
                      onClick={() => (controller.selectedVariant = item)}
                    >
                      <Image src={Cap} width="84" />
                      <h3 className="mt-4">{item.description}</h3>
                    </Button>
                  </Col>
                ))}
              </Row>
              <Fade in={controller.canSubmit}>
                <Button onClick={controller.submit} disabled={!controller.canSubmit}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Оплатить</span>
                    <span className="fs-2 fw-bold">{controller.selectedVariant?.price}₽</span>
                  </div>
                </Button>
              </Fade>
            </Stack>
          </div>
        </div>
      </Container>
    )
  },
)
