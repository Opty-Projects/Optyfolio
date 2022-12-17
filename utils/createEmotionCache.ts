// Official example:
// https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/src/createEmotionCache.ts
import createCache from '@emotion/cache'

const isBrowser = typeof document !== 'undefined'
const createEmotionCache = () => {
  let insertionPoint: HTMLMetaElement | undefined
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    )
    insertionPoint = emotionInsertionPoint ?? undefined
  }
  return createCache({ key: 'mui-style', insertionPoint })
}

export default createEmotionCache
