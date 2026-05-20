'use client'

import {type ReactNode, useEffect, useRef} from 'react'
import {motion, useReducedMotion} from 'framer-motion'
import gsap from 'gsap'
import {RoughEase} from 'gsap/EasePack'

interface SequenceRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: 'logo' | 'soft'
}

export default function SequenceReveal({
  children,
  className,
  delay,
  duration,
  variant = 'soft',
}: SequenceRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const logoRef = useRef<HTMLDivElement>(null)
  const isLogo = variant === 'logo'
  const resolvedDelay = delay ?? (isLogo ? 0.3 : 0)

  useEffect(() => {
    if (!isLogo || shouldReduceMotion || !logoRef.current) {
      return
    }

    gsap.registerPlugin(RoughEase)
    gsap.set(logoRef.current, {opacity: 0})

    const tween = gsap.to(logoRef.current, {
      delay: resolvedDelay,
      duration: duration ?? 1,
      ease: "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp: true})",
      opacity: 1,
    })

    return () => {
      tween.kill()
    }
  }, [duration, isLogo, resolvedDelay, shouldReduceMotion])

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  if (isLogo) {
    return (
      <div ref={logoRef} className={className} style={{opacity: 0}}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      animate={{
        opacity: [0, 0.42, 0.18, 1],
        y: [8, 0, 1, 0],
      }}
      className={className}
      initial={{opacity: 0, y: 8}}
      transition={{
        delay: resolvedDelay,
        duration: duration ?? 0.54,
        ease: 'linear',
        times: [0, 0.28, 0.45, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
