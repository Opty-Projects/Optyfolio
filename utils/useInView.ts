import { RefObject, useEffect, useRef, useState } from 'react'

export interface UseInViewOptions {
  /** Fire once then stop observing. Defaults to true. */
  once?: boolean
  threshold?: number
  rootMargin?: string
}

/** Ref + whether the element has scrolled into view (fires once by default). */
const useInView = <T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): [RefObject<T | null>, boolean] => {
  const { once = true, threshold = 0.3, rootMargin = '0px' } = options
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return [ref, inView]
}

export default useInView
