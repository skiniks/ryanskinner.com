export const badgeStyle = {
  date: 'inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20',
  readingTime: 'inline-flex items-center rounded-full bg-gray-700/50 px-3 py-1.5 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-gray-600',
  tag: 'inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20',
} as const

export const cardStyle = {
  base: 'group relative flex flex-col rounded-2xl shadow-lg transition-all duration-300 isolate',
  gradientBefore: "card-gradient before:content-[''] before:absolute before:inset-0 before:z-0 before:rounded-2xl before:pointer-events-none before:transition-all before:duration-300 before:ease-in-out",
  innerBorder: "after:content-[''] after:absolute after:inset-[2px] after:z-1 after:rounded-2xl after:bg-gray-900 after:border-2 after:border-gray-800 after:transition-all after:duration-300 after:ease-in-out hover:after:border-transparent hover:after:inset-[4px]",
  highlighted: 'before:opacity-100 after:border-transparent',
  notHighlighted: 'before:opacity-0 hover:before:opacity-100',
} as const

export function getCardClasses(highlighted: boolean = false): string {
  const highlightClass = highlighted ? cardStyle.highlighted : cardStyle.notHighlighted
  return `${cardStyle.base} ${cardStyle.gradientBefore} ${cardStyle.innerBorder} ${highlightClass}`
}

export const linkStyle = {
  base: 'transition-colors duration-200',
  hover: 'hover:text-blue-400',
  underline: 'underline underline-offset-4 hover:opacity-70 transition-opacity',
} as const
