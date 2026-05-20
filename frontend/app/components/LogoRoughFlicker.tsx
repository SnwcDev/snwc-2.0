'use client'

import {type ReactNode, useEffect, useRef} from 'react'
import {useReducedMotion} from 'framer-motion'
import gsap from 'gsap'
import {RoughEase} from 'gsap/EasePack'

interface LogoRoughFlickerProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  idle?: boolean
  idleMaxDelay?: number
  idleMinDelay?: number
  reveal?: boolean
}

const roughEase =
  "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp: true})"

export default function LogoRoughFlicker({
  children,
  className,
  delay = 0.3,
  duration = 1,
  idle = false,
  idleMaxDelay = 4.2,
  idleMinDelay = 1.8,
  reveal = true,
}: LogoRoughFlickerProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    if (shouldReduceMotion) {
      gsap.set(root, {opacity: 1})
      return
    }

    gsap.registerPlugin(RoughEase)

    let idleTimeout: number | undefined
    let idleTween: gsap.core.Tween | undefined

    const playIdleFlicker = () => {
      idleTween = gsap.fromTo(
        root,
        {opacity: gsap.utils.random(0.04, 0.38)},
        {
          duration: gsap.utils.random(0.62, 1),
          ease: roughEase,
          opacity: 1,
          onComplete: scheduleIdleFlicker,
        },
      )
    }

    const scheduleIdleFlicker = () => {
      const nextDelay = gsap.utils.random(idleMinDelay, idleMaxDelay)

      idleTimeout = window.setTimeout(() => {
        playIdleFlicker()
      }, nextDelay * 1000)
    }

    if (!reveal) {
      gsap.set(root, {opacity: 1})

      if (idle) {
        idleTimeout = window.setTimeout(playIdleFlicker, delay * 1000)
      }

      return () => {
        idleTween?.kill()

        if (idleTimeout !== undefined) {
          window.clearTimeout(idleTimeout)
        }
      }
    }

    gsap.set(root, {opacity: 0})

    const introTween = gsap.to(root, {
      delay,
      duration,
      ease: roughEase,
      opacity: 1,
      onComplete: () => {
        if (idle) {
          scheduleIdleFlicker()
        }
      },
    })

    return () => {
      introTween.kill()
      idleTween?.kill()

      if (idleTimeout !== undefined) {
        window.clearTimeout(idleTimeout)
      }
    }
  }, [delay, duration, idle, idleMaxDelay, idleMinDelay, reveal, shouldReduceMotion])

  return (
    <div ref={rootRef} className={className} style={{opacity: shouldReduceMotion || !reveal ? 1 : 0}}>
      {children}
    </div>
  )
}
