'use client'

import {useEffect, useMemo, useRef} from 'react'
import {useReducedMotion} from 'framer-motion'
import gsap from 'gsap'
import {RoughEase} from 'gsap/EasePack'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export type SamuelTextTrigger = 'inView' | 'mount'
export type SamuelTextVariant = 'word' | 'char'

interface SamuelTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  rollOnHover?: boolean
  rollSpeed?: number
  stagger?: number
  trigger?: SamuelTextTrigger
  variant?: SamuelTextVariant
}

type RollSegment =
  | {type: 'word'; letters: string; trailing: string; len: number; stepsDone: number}
  | {type: 'ws' | 'other'; raw: string}

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const roughEase =
  "rough({ template: circ.easeOut, strength: 4, points: 50, taper: 'out', randomize: true, clamp: true})"

const randomLetter = () => alphabet[Math.floor(Math.random() * alphabet.length)] || 'a'
const rotateLetters = (value: string) =>
  !value || value.length < 2 ? value : `${value.slice(-1)}${value.slice(0, -1)}`

const splitRollText = (value: string): RollSegment[] =>
  (value.match(/\S+|\s+/g) || []).map((piece) => {
    if (/^\s+$/.test(piece)) {
      return {type: 'ws', raw: piece}
    }

    const match = piece.match(/^([\p{L}'’]+)(.*)$/u)

    if (!match) {
      return {type: 'other', raw: piece}
    }

    const letters = match[1] || ''

    return {
      type: 'word',
      letters,
      trailing: match[2] || '',
      len: letters.length,
      stepsDone: 0,
    }
  })

const renderRollSegments = (segments: RollSegment[]) =>
  segments
    .map((segment) => (segment.type === 'word' ? `${segment.letters}${segment.trailing}` : segment.raw))
    .join('')

const advanceRollSegments = (segments: RollSegment[]) => {
  let finished = true

  segments.forEach((segment) => {
    if (segment.type !== 'word') {
      return
    }

    if (segment.stepsDone < segment.len) {
      segment.letters = rotateLetters(segment.letters)
      segment.stepsDone += 1
    }

    if (segment.stepsDone < segment.len) {
      finished = false
    }
  })

  return finished
}

export default function SamuelText({
  className,
  delay,
  duration,
  once = true,
  rollOnHover = false,
  rollSpeed = 46,
  stagger,
  text,
  trigger = 'inView',
  variant = 'word',
}: SamuelTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const itemRefs = useRef<HTMLSpanElement[]>([])
  const shouldReduceMotion = useReducedMotion()
  const wordPieces = useMemo(() => text.split(/(\s+)/), [text])
  const characters = useMemo(() => Array.from(text), [text])
  const resolvedDelay = delay ?? (variant === 'word' ? 0.3 : 0)
  const resolvedDuration = duration ?? (variant === 'word' ? 1 : 0.03)
  const resolvedStagger = stagger ?? 0.08
  const rootClassName = ['titan-hover-text', className].filter(Boolean).join(' ')

  useEffect(() => {
    if (shouldReduceMotion || !rootRef.current) {
      return
    }

    gsap.registerPlugin(RoughEase, ScrollTrigger)

    const root = rootRef.current
    const targets = itemRefs.current.filter((target) => target.isConnected)

    if (targets.length === 0) {
      return
    }

    const context = gsap.context(() => {
      gsap.set(targets, {opacity: 0})

      const timeline = gsap.timeline(
        trigger === 'inView'
          ? {
              scrollTrigger: {
                end: 'bottom center',
                once,
                start: 'top bottom',
                trigger: root,
              },
            }
          : undefined,
      )

      if (variant === 'word') {
        timeline.to(
          targets,
          {
            duration: resolvedDuration,
            ease: roughEase,
            opacity: 1,
            stagger: {each: resolvedStagger, from: 'random'},
          },
          resolvedDelay,
        )

        return
      }

      targets.forEach((target, index) => {
        const original = target.dataset.original || target.textContent || ''

        timeline.fromTo(
          target,
          {opacity: 0},
          {
            duration: resolvedDuration,
            onComplete: () => {
              gsap.delayedCall(0.03, () => {
                target.textContent = original
              })
            },
            onRepeat: () => {
              target.textContent = randomLetter()
            },
            onStart: () => {
              target.textContent = randomLetter()
            },
            opacity: 1,
            repeat: 1,
            repeatDelay: 0.03,
            repeatRefresh: true,
          },
          resolvedDelay + (index + 1) * resolvedStagger,
        )
      })
    }, root)

    return () => {
      context.revert()
    }
  }, [
    once,
    resolvedDelay,
    resolvedDuration,
    resolvedStagger,
    shouldReduceMotion,
    text,
    trigger,
    variant,
  ])

  useEffect(() => {
    if (shouldReduceMotion || !rollOnHover || !rootRef.current) {
      return
    }

    const root = rootRef.current
    const hoverTarget = root.closest('a, button') || root
    let interval: number | null = null
    let isRolling = false

    const stopRolling = () => {
      if (interval !== null) {
        window.clearInterval(interval)
        interval = null
      }

      isRolling = false
      root.textContent = text
    }

    const startRolling = () => {
      if (isRolling) {
        return
      }

      isRolling = true

      const segments = splitRollText(text)
      const maxSteps = Math.max(
        0,
        ...segments
          .filter((segment): segment is Extract<RollSegment, {type: 'word'}> => segment.type === 'word')
          .map((segment) => segment.len),
      )
      let steps = 0

      interval = window.setInterval(() => {
        const finished = advanceRollSegments(segments)
        root.textContent = renderRollSegments(segments)
        steps += 1

        if (finished || steps >= maxSteps) {
          stopRolling()
        }
      }, rollSpeed)
    }

    hoverTarget.addEventListener('mouseenter', startRolling)
    hoverTarget.addEventListener('pointerenter', startRolling)
    hoverTarget.addEventListener('focusin', startRolling)

    return () => {
      hoverTarget.removeEventListener('mouseenter', startRolling)
      hoverTarget.removeEventListener('pointerenter', startRolling)
      hoverTarget.removeEventListener('focusin', startRolling)
      stopRolling()
    }
  }, [rollOnHover, rollSpeed, shouldReduceMotion, text])

  if (shouldReduceMotion) {
    return (
      <span className={rootClassName} data-titan-roll={rollOnHover ? 'true' : undefined}>
        {text}
      </span>
    )
  }

  if (variant === 'char') {
    return (
      <span
        aria-label={text}
        className={rootClassName}
        data-titan-roll={rollOnHover ? 'true' : undefined}
        ref={rootRef}
      >
        <span aria-hidden="true">
          {characters.map((character, index) => {
            if (/\s/.test(character)) {
              return (
                <span className="whitespace-pre" key={`space-${index}`}>
                  {character}
                </span>
              )
            }

            return (
              <span
                className="inline-block whitespace-pre will-change-[opacity]"
                data-original={character}
                key={`${character}-${index}`}
                ref={(node) => {
                  if (node) {
                    itemRefs.current[index] = node
                  } else {
                    delete itemRefs.current[index]
                  }
                }}
                style={{opacity: 0}}
              >
                {character}
              </span>
            )
          })}
        </span>
      </span>
    )
  }

  return (
    <span
      aria-label={text}
      className={rootClassName}
      data-titan-roll={rollOnHover ? 'true' : undefined}
      ref={rootRef}
    >
      <span aria-hidden="true">
        {wordPieces.map((piece, index) => {
          if (piece.trim().length === 0) {
            return (
              <span className="whitespace-pre" key={`space-${index}`}>
                {piece}
              </span>
            )
          }

          return (
            <span
              className="inline-block whitespace-nowrap will-change-[opacity]"
              key={`${piece}-${index}`}
              ref={(node) => {
                if (node) {
                  itemRefs.current[index] = node
                } else {
                  delete itemRefs.current[index]
                }
              }}
              style={{opacity: 0}}
            >
              {piece}
            </span>
          )
        })}
      </span>
    </span>
  )
}
