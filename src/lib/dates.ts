export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(`${startDate}T12:00:00`)
  const startMonth = start.toLocaleDateString('en-US', { month: 'long' })
  const startDay = start.getDate()

  if (!endDate || startDate === endDate)
    return `${startMonth} ${startDay}`

  const end = new Date(`${endDate}T12:00:00`)
  const endMonth = end.toLocaleDateString('en-US', { month: 'long' })
  const endDay = end.getDate()

  if (startMonth === endMonth)
    return `${startMonth} ${startDay} - ${endDay}`

  return `${startMonth} ${startDay} - ${endMonth} ${endDay}`
}

export function isFutureDate(dateString: string): boolean {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const date = new Date(dateString)
  date.setHours(23, 59, 59, 999)

  return date >= now
}
