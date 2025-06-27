import type { Badge } from '@/types'

const colorMap: Record<string, { text: string; bg: string }> = {
  blue: { text: 'text-[#3538CD]', bg: 'bg-[#EEF4FF]' },
  red: { text: 'text-[#C11574]', bg: 'bg-[#FDF2FA]' },
  green: { text: 'text-[#027A48]', bg: 'bg-[#ECFDF3]' },
  purple: { text: 'text-[#6941C6]', bg: 'bg-[#F9F5FF]' },
}

const Badge = ({ color, title }: Badge) => {
  const colorClasses = colorMap[color] || {
    text: 'text-gray-900',
    bg: 'bg-gray-200',
  }
  return (
    <div
      className={`h-6 rounded-lg px-3 font-medium ${colorClasses.text} ${colorClasses.bg}`}
    >
      {title}
    </div>
  )
}

export default Badge
