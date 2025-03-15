import moment, { MomentInput } from 'moment'

export const getDateDelta = (start: MomentInput, end: MomentInput) => {
  const years = moment(end).diff(start, 'years')
  const months = moment(end).diff(start, 'months') - years * 12
  return [
    years > 0 ? years + ' yr' + (years > 1 ? 's' : '') : null,
    months > 0 ? months + ' mo' + (months > 1 ? 's' : '') : null,
  ]
    .filter(Boolean)
    .join(' ')
}
