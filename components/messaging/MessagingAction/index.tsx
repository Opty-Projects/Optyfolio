import { FC, useState } from 'react'
import { Message } from '@mui/icons-material'
import AnimatedModal from '../../shared/AnimatedModal'
import MessageMeForm from '../MessageMeForm'
import { MessagingFab } from './styles'

const MessagingAction: FC = () => {
  const [openMessageMeModal, setOpenMessageMeModal] = useState(false)

  return (
    <>
      <MessagingFab
        onClick={() => setOpenMessageMeModal(true)}
        color="primary"
        size="medium"
      >
        <Message />
      </MessagingFab>
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
