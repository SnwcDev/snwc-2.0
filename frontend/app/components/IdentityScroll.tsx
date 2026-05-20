'use client'

import {useRef} from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

const storyText =
  'Tworzę nowoczesne strony, blogi i automatyzacje, które tłumaczą technologię na prosty język. Lubię rozwiązania szybkie, czytelne i gotowe do rozwoju, bez zbędnego hałasu. To miejsce powstaje po to, żeby pokazywać narzędzia, procesy i pomysły, które pomagają pracować mądrzej z AI, DevOps, webem i produktami cyfrowymi.'

const hiddenLetterClass =
  'inline-block overflow-hidden text-center will-change-[width,opacity,filter]'

export default function IdentityScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  })

  const nameOpacity = useTransform(progress, [0.02, 0.12, 0.74, 0.88, 1], [0, 1, 1, 0.32, 0.12])
  const nameY = useTransform(progress, [0.02, 0.12, 0.62, 0.76], [44, 0, 0, -300])
  const nameScale = useTransform(progress, [0.62, 0.76], [1, 0.36])

  const plainNameOpacity = useTransform(progress, [0.02, 0.12, 0.26, 0.36], [0, 1, 1, 0])
  const animatedNameOpacity = useTransform(progress, [0.3, 0.38], [0, 1])

  const firstNameOpacity = useTransform(progress, [0.38, 0.5], [1, 0])
  const firstNameWidth = useTransform(progress, [0.38, 0.52], ['6.5ch', '0ch'])
  const firstNameY = useTransform(progress, [0.38, 0.52], [0, -34])
  const firstNameFilter = useTransform(progress, [0.38, 0.52], ['blur(0px)', 'blur(18px)'])
  const nameSpaceWidth = useTransform(progress, [0.38, 0.52], ['0.46em', '0em'])

  const hiddenSurnameOpacity = useTransform(progress, [0.5, 0.62], [1, 0])
  const hiddenSurnameWidth = useTransform(progress, [0.5, 0.64], ['0.72em', '0em'])
  const hiddenSurnameFilter = useTransform(progress, [0.5, 0.64], ['blur(0px)', 'blur(14px)'])
  const surnameGap = useTransform(progress, [0, 0.5, 0.64, 0.74], ['0.02em', '0.02em', '0.24em', '0.04em'])

  const storyOpacity = useTransform(progress, [0.66, 0.76], [0, 1])
  const storyY = useTransform(progress, [0.66, 0.78], [70, 0])
  const storyFilter = useTransform(progress, [0.66, 0.8], ['blur(18px)', 'blur(0px)'])
  const storyClip = useTransform(
    progress,
    [0.68, 0.88],
    ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
  )

  const photoOpacity = useTransform(progress, [0.78, 0.9], [0, 1])
  const photoY = useTransform(progress, [0.78, 0.92], [80, 0])
  const photoScale = useTransform(progress, [0.78, 0.92], [0.92, 1])

  const shadowOpacity = useTransform(progress, [0, 0.18, 0.8, 1], [0.15, 0.55, 0.42, 0])

  return (
    <section id="identity" ref={sectionRef} className="relative h-[560vh] bg-[#050607] text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#050607_0%,#090a0c_46%,#050607_100%)]"
          style={{opacity: shadowOpacity}}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px] opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#050607_0%,rgba(5,6,7,0)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,#050607_0%,rgba(5,6,7,0)_100%)]" />

        <div className="relative mx-auto flex h-full w-full max-w-[1280px] items-center px-6 max-[479px]:px-4">
          <motion.div
            aria-label="PATRYK SYNOWIEC"
            className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-[family-name:var(--font-inter-tight)] text-[clamp(44px,7.5vw,104px)] font-normal leading-none tracking-normal text-white"
            style={{opacity: nameOpacity, scale: nameScale, y: nameY}}
          >
            <motion.span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
              style={{opacity: plainNameOpacity}}
            >
              PATRYK SYNOWIEC
            </motion.span>
            <motion.span
              aria-hidden
              className="relative inline-flex items-center justify-center"
              style={{opacity: animatedNameOpacity}}
            >
              <motion.span
                className="inline-block overflow-hidden whitespace-nowrap will-change-[width,opacity,transform,filter]"
                style={{
                  filter: firstNameFilter,
                  opacity: firstNameOpacity,
                  width: firstNameWidth,
                  y: firstNameY,
                }}
              >
                PATRYK
              </motion.span>
              <motion.span aria-hidden className="inline-block" style={{width: nameSpaceWidth}} />
              <motion.span
                className="inline-flex items-center justify-center whitespace-nowrap"
                style={{columnGap: surnameGap}}
              >
                <span>S</span>
                <motion.span
                  className={hiddenLetterClass}
                  style={{
                    filter: hiddenSurnameFilter,
                    opacity: hiddenSurnameOpacity,
                    width: hiddenSurnameWidth,
                  }}
                >
                  Y
                </motion.span>
                <span>N</span>
                <motion.span
                  className={hiddenLetterClass}
                  style={{
                    filter: hiddenSurnameFilter,
                    opacity: hiddenSurnameOpacity,
                    width: hiddenSurnameWidth,
                  }}
                >
                  O
                </motion.span>
                <span>W</span>
                <motion.span
                  className={hiddenLetterClass}
                  style={{
                    filter: hiddenSurnameFilter,
                    opacity: hiddenSurnameOpacity,
                    width: hiddenSurnameWidth,
                  }}
                >
                  I
                </motion.span>
                <motion.span
                  className={hiddenLetterClass}
                  style={{
                    filter: hiddenSurnameFilter,
                    opacity: hiddenSurnameOpacity,
                    width: hiddenSurnameWidth,
                  }}
                >
                  E
                </motion.span>
                <span>C</span>
              </motion.span>
            </motion.span>
          </motion.div>

          <motion.div
            className="relative z-20 grid w-full grid-cols-[minmax(0,1fr)_minmax(260px,380px)] items-center gap-12 pt-20 max-[991px]:grid-cols-1 max-[991px]:gap-8 max-[767px]:gap-6 max-[767px]:pt-10"
            style={{filter: storyFilter, opacity: storyOpacity, y: storyY}}
          >
            <div className="max-w-[760px]">
              <div className="relative">
                <p className="font-[family-name:var(--font-inter-tight)] text-[clamp(26px,3vw,42px)] font-normal leading-[1.15] tracking-normal text-white/10 max-[767px]:text-[clamp(20px,6vw,24px)]">
                  {storyText}
                </p>
                <motion.p
                  className="absolute inset-0 font-[family-name:var(--font-inter-tight)] text-[clamp(26px,3vw,42px)] font-normal leading-[1.15] tracking-normal text-white [text-shadow:0_0_34px_rgba(255,255,255,0.18)] max-[767px]:text-[clamp(20px,6vw,24px)]"
                  style={{clipPath: storyClip}}
                >
                  {storyText}
                </motion.p>
              </div>
            </div>

            <motion.div
              className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#101214] shadow-[0_34px_90px_rgba(0,0,0,0.45)] max-[991px]:max-w-[300px] max-[767px]:max-w-[220px]"
              style={{opacity: photoOpacity, scale: photoScale, y: photoY}}
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,#171a1e_0%,#0a0b0d_55%,#202329_100%)]" />
              <div className="absolute inset-x-8 top-8 h-[1px] bg-white/18" />
              <div className="absolute inset-8 rounded-md border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[family-name:var(--font-inter-tight)] text-[74px] font-normal leading-none tracking-normal text-white/18">
                  PS
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-6">
                <p className="m-0 font-[family-name:var(--font-inter-tight)] text-[18px] font-normal leading-tight text-white max-[767px]:text-[15px]">
                  Placeholder zdjęcia
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter-tight)] text-[14px] font-normal leading-[1.45] text-[#b6bcc9] max-[767px]:text-[12px]">
                  Tu później wskoczy portret Patryka.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
