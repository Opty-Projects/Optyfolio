import { useFormik } from 'formik'
import Image from 'next/image'
import { FC, useState } from 'react'
import * as yup from 'yup'
import { Cancel, Send } from '@mui/icons-material'
import { Alert } from '@mui/lab'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  AlertColor as AlertType,
  Avatar,
  Button,
  Portal,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import { notifyMe } from '../../../api/messaging'
import { useStyles } from './styles'

export interface MessageMeFormProps {
  onClose: () => void
}

const formSchema = yup.object({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  subject: yup.string().min(3),
  message: yup.string().min(80).required(),
})
const formPlaceholders = {
  name: 'John Doe',
  email: 'john.doe@gmail.com',
  subject: 'Opportunity',
  message: `Hi Ricardo 👋
I'm interested in (...)
Please contact me at your earliest convenience.`,
}
const formInitialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}
const submissionAlertMessages: Partial<Record<AlertType, string>> = {
  success: `Message sent successfully.
I will get back to you soon!`,
  error: `Error sending message.
Get in touch with me through one of my social networks.`,
}

const MessageMeForm: FC<MessageMeFormProps> = ({ onClose }) => {
  const classes = useStyles()
  const [submissionAlert, setSubmissionAlert] = useState<
    AlertType | undefined
  >()
  const [messageFieldActive, setMessageFieldActive] = useState(false)

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) =>
      notifyMe(values)
        .then(() => setSubmissionAlert('success'))
        .catch(() => setSubmissionAlert('error'))
        .finally(onClose)
        .finally(resetForm),
  })

  const handleClose = () => {
    onClose()
    formik.resetForm()
  }

  return (
    <>
      <Typography className={classes.title}>Message me 🚀</Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          type="text"
          placeholder={formPlaceholders.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
          fullWidth
          label="Name"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          placeholder={formPlaceholders.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
          fullWidth
          label="Email"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="subject"
          name="subject"
          type="text"
          placeholder={formPlaceholders.subject}
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          fullWidth
          label="Subject"
          InputLabelProps={{ shrink: true }}
        />
        <div className={classes.section}>
          <TextField
            id="message"
            name="message"
            type="text"
            placeholder={formPlaceholders.message}
            value={formik.values.message}
            onChange={formik.handleChange}
            onFocus={() => setMessageFieldActive(true)}
            onBlur={(e) => {
              setMessageFieldActive(false)
              formik.handleBlur(e)
            }}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            required
            fullWidth
            multiline
            minRows={5}
            maxRows={10}
            label="Message"
            InputLabelProps={{ shrink: true }}
          />
          <Slide
            in={
              formik.touched.message &&
              Boolean(formik.errors.message) &&
              !messageFieldActive
            }
            direction="left"
            mountOnEnter
            unmountOnExit
          >
            <Avatar className={classes.gif}>
              <Image src="/specifically.gif" layout="fill" />
            </Avatar>
          </Slide>
        </div>
        <div className={classes.section}>
          <Button
            className={classes.button}
            color="primary"
            variant="outlined"
            endIcon={<Cancel />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <LoadingButton
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            endIcon={<Send />}
            loading={formik.isSubmitting}
            loadingPosition="end"
          >
            Send
          </LoadingButton>
        </div>
      </form>
      <Portal container={document.body}>
        <Snackbar
          open={!!submissionAlert}
          autoHideDuration={6000}
          onClose={() => setSubmissionAlert(undefined)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          TransitionComponent={Slide}
        >
          <Alert
            onClose={() => setSubmissionAlert(undefined)}
            severity={submissionAlert}
          >
            {submissionAlert && submissionAlertMessages[submissionAlert]}
          </Alert>
        </Snackbar>
      </Portal>
    </>
  )
}

export default MessageMeForm
