const observeSmoothStepInElements = () => {
  const intersectionObserver = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains('active'))
        entry.target.classList.add('active')
    })
  )
  const smoothStepInElements = document.getElementsByClassName('smoothStepIn')
  for (let i = 0; i < smoothStepInElements.length; i++)
    intersectionObserver.observe(smoothStepInElements[i])
}

export default observeSmoothStepInElements
