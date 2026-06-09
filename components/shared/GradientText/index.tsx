import { styled } from '@mui/material/styles'
import { gradientText } from '../../../styles/tokens'

/** Inline text with the signature warm gradient clipped to its glyphs. */
const GradientText = styled('span')(({ theme }) => ({
  ...gradientText(theme.palette.mode),
  display: 'inline-block',
}))

export default GradientText
