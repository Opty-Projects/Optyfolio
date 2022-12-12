import { FC, PropsWithChildren } from 'react'
import { Box, Modal, Zoom } from '@mui/material'
import Card from '../Card'
import { useStyles } from './styles'

export interface AnimatedModalProps {
  open: boolean
  onClose: () => void
}

const AnimatedModal: FC<PropsWithChildren<AnimatedModalProps>> = ({
  open,
  onClose,
  children,
}) => {
  const classes = useStyles()

  return (
    <Modal
      open={open}
      onClose={onClose}
      classes={{ root: classes.modal }}
      closeAfterTransition
      disableScrollLock
      keepMounted
    >
      <Zoom in={open}>
        <Box className={classes.modalBox}>
          <Card className={classes.modalContent}>{children}</Card>
        </Box>
      </Zoom>
    </Modal>
  )
}

export default AnimatedModal
