const DATE_ONLY_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/

export function parseDate(dateString: string): Date {
  if (DATE_ONLY_REGEX.test(dateString))
    return new Date(`${dateString}T12:00:00`)

  return new Date(dateString)
}

export function toDateOnly(dateString: string): string {
  const match = DATE_ONLY_REGEX.exec(dateString)
  if (match !== null)
    return dateString

  const isoPrefix = /^(\d{4}-\d{2}-\d{2})/.exec(dateString)
  if (isoPrefix !== null)
    return isoPrefix[1]

  const date = new Date(dateString)
  if (Number.isNaN(date.getTime()))
    return dateString

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function formatDate(dateString: string): string {
  return parseDate(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = parseDate(startDate)
  const startMonth = start.toLocaleDateString('en-US', { month: 'long' })
  const startDay = start.getDate()

  if (endDate === undefined || endDate === '' || startDate === endDate)
    return `${startMonth} ${startDay}`

  const end = parseDate(endDate)
  const endMonth = end.toLocaleDateString('en-US', { month: 'long' })
  const endDay = end.getDate()

  if (startMonth === endMonth)
    return `${startMonth} ${startDay} - ${endDay}`

  return `${startMonth} ${startDay} - ${endMonth} ${endDay}`
}

export function isFutureDate(dateString: string): boolean {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const date = parseDate(dateString)
  date.setHours(23, 59, 59, 999)

  return date >= now
}
