import { FC } from 'react'
import { Button } from 'react-bootstrap'

export const BackBtn: FC<{ onClick(): void }> = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant="light">
      &larr;
    </Button>
  )
}
