'use client'

import SamuelText, {type SamuelTextTrigger} from '@/app/components/SamuelText'

interface FlickerTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  stagger?: number
  trigger?: SamuelTextTrigger
}

export default function FlickerText({
  className,
  delay,
  duration,
  once = true,
  stagger = 0.08,
  text,
  trigger = 'inView',
}: FlickerTextProps) {
  return (
    <SamuelText
      className={className}
      delay={delay}
      duration={duration}
      once={once}
      stagger={stagger}
      text={text}
      trigger={trigger}
      variant="word"
    />
  )
}
