import { FC, PropsWithChildren } from 'react'
import { Zoom } from '@mui/material'
import { CenteredModal, ModalBox, ModalContentCard } from './styles'

export interface AnimatedModalProps {
  open: boolean
  onClose: () => void
}

const AnimatedModal: FC<PropsWithChildren<AnimatedModalProps>> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <CenteredModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableScrollLock
      keepMounted
    >
      <Zoom in={open}>
        <ModalBox>
          <ModalContentCard>{children}</ModalContentCard>
        </ModalBox>
      </Zoom>
    </CenteredModal>
  )
}

export default AnimatedModal
