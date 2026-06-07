const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

export const formatMonthYear = (date: Date) => monthYear.format(date)

/** Inclusive month span (counts both endpoints): Sep 2022 → Jun 2026 = "3 yrs 10 mos". */
export const getDateDelta = (start: Date, end: Date) => {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1
  const total = Math.max(months, 0)

  const years = Math.floor(total / 12)
  const remMonths = total % 12

  return [
    years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : null,
    remMonths > 0 ? `${remMonths} mo${remMonths > 1 ? 's' : ''}` : null,
  ]
    .filter(Boolean)
    .join(' ')
}
