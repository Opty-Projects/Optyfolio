import type { PaletteMode } from '@mui/material'
import type { CSSObject, Theme } from '@mui/material/styles'

/** Shared design tokens — the warm "sunset" accent system, anchored on #f9a825. */

export const warm = {
  orange: '#f97316', // deep end
  amber: '#f9a825', // anchor
  gold: '#fcd34d', // bright end
  coral: '#fb7185', // extra accent
} as const

/** Signature accent gradient — bright; for fills and for text on dark surfaces. */
export const warmGradient = `linear-gradient(120deg, ${warm.orange} 0%, ${warm.amber} 50%, ${warm.gold} 100%)`

/** Deeper, higher-contrast variant — text on light surfaces, fills under white icons. */
export const warmGradientStrong = `linear-gradient(120deg, #ea580c 0%, #d9480b 50%, #c2410c 100%)`

/** A softer, translucent version for fills and subtle backgrounds. */
export const warmGradientSoft = `linear-gradient(120deg, ${warm.orange}29, ${warm.gold}29)`

export const easing = {
  /** Overshooting spring — great for entrances and hovers. */
  spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const

/** Clip the warm gradient to text — tuned per mode so it stays readable. */
export const gradientText = (mode: PaletteMode): CSSObject => ({
  backgroundImage: mode === 'dark' ? warmGradient : warmGradientStrong,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
})

/** Frosted-glass surface, tuned per palette mode. */
export const glass = (theme: Theme): CSSObject => {
  const dark = theme.palette.mode === 'dark'
  return {
    backgroundColor: dark
      ? 'rgba(255, 255, 255, 0.04)'
      : 'rgba(255, 255, 255, 0.72)',
    backdropFilter: 'blur(16px) saturate(170%)',
    WebkitBackdropFilter: 'blur(16px) saturate(170%)',
    border: `1px solid ${dark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(34, 17, 0, 0.08)'}`,
    boxShadow: dark
      ? '0 10px 36px -18px rgba(0, 0, 0, 0.7)'
      : '0 10px 36px -20px rgba(17, 17, 34, 0.22)',
  }
}

/** Accent-tinted glow + lift, applied on hover for interactive surfaces. */
export const glassHover = (theme: Theme): CSSObject => {
  const dark = theme.palette.mode === 'dark'
  return {
    transform: 'translateY(-4px)',
    borderColor: dark ? 'rgba(249, 168, 37, 0.45)' : 'rgba(234, 88, 12, 0.4)',
    boxShadow: dark
      ? `0 18px 48px -18px rgba(249, 115, 22, 0.5)`
      : `0 18px 48px -22px rgba(234, 88, 12, 0.32)`,
  }
}
