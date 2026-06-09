import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const bodyFontFamily = inter.style.fontFamily
export const displayFontFamily = spaceGrotesk.style.fontFamily
