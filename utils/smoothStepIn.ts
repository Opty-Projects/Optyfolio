/** Adds `.active` to `.smoothStepIn` elements as they scroll in; returns a disconnect. */
const observeSmoothStepInElements = () => {
  const intersectionObserver = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains('active'))
        entry.target.classList.add('active')
    }),
  )
  const smoothStepInElements = document.getElementsByClassName('smoothStepIn')
  for (let i = 0; i < smoothStepInElements.length; i++)
    intersectionObserver.observe(smoothStepInElements[i])

  return () => intersectionObserver.disconnect()
}

export default observeSmoothStepInElements
