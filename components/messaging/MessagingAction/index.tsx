import { FC, useState } from 'react'
import { Message } from '@mui/icons-material'
import { Fab } from '@mui/material'
import AnimatedModal from '../../shared/AnimatedModal'
import MessageMeForm from '../MessageMeForm'
import { useStyles } from './styles'

const MessagingAction: FC = () => {
  const classes = useStyles()
  const [openMessageMeModal, setOpenMessageMeModal] = useState(false)

  return (
    <>
      <Fab
        className={classes.fab}
        onClick={() => setOpenMessageMeModal(true)}
        color="primary"
      >
        <Message />
      </Fab>
      <AnimatedModal
        open={openMessageMeModal}
        onClose={() => setOpenMessageMeModal(false)}
      >
        <MessageMeForm onClose={() => setOpenMessageMeModal(false)} />
      </AnimatedModal>
    </>
  )
}

export default MessagingAction
