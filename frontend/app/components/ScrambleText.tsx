'use client'

import SamuelText, {type SamuelTextTrigger} from '@/app/components/SamuelText'

type Direction = 'left' | 'right' | 'center' | 'random'
type Trigger = 'hover' | 'inView' | 'mount'
type Variant = 'link' | 'label'

interface ScrambleTextProps {
  text: string
  className?: string
  delay?: number
  from?: Direction
  keepSpaces?: boolean
  matchCase?: boolean
  replay?: boolean
  scrambledColor?: string
  scrambledLetters?: number
  rollOnHover?: boolean
  rollSpeed?: number
  speed?: number
  trigger?: Trigger
  variant?: Variant
}

const resolveTrigger = (trigger: Trigger | undefined): SamuelTextTrigger => {
  if (trigger === 'mount') {
    return 'mount'
  }

  return 'inView'
}

export default function ScrambleText({
  className,
  delay,
  rollOnHover = true,
  rollSpeed = 46,
  text,
  trigger,
  variant = 'link',
}: ScrambleTextProps) {
  const isLabel = variant === 'label'

  return (
    <SamuelText
      className={className}
      delay={delay ?? (isLabel ? 0 : 0.3)}
      rollOnHover={rollOnHover}
      rollSpeed={rollSpeed}
      stagger={isLabel ? 0.08 : 0.08}
      text={text}
      trigger={resolveTrigger(trigger)}
      variant={isLabel ? 'char' : 'word'}
    />
  )
}
