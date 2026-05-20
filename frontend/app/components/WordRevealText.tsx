'use client'

import SamuelText, {type SamuelTextTrigger} from '@/app/components/SamuelText'

interface WordRevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  stagger?: number
  trigger?: SamuelTextTrigger
}

export default function WordRevealText({
  className,
  delay = 0.3,
  duration,
  once = true,
  stagger = 0.02,
  text,
  trigger = 'inView',
}: WordRevealTextProps) {
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
