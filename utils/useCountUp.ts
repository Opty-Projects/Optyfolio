import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Animates 0 → target with an ease-out curve once `active` becomes true. */
const useCountUp = (target: number, active: boolean, durationMs = 1400) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    const duration = prefersReducedMotion() ? 0 : durationMs
    let raf = 0
    let start: number | null = null

    const tick = (now: number) => {
      if (start === null) start = now
      const progress = duration <= 0 ? 1 : Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(target * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, durationMs])

  return value
}

export default useCountUp
