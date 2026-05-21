"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ScrollRevealTextProps {
  text: string
  progress: any
}

function ScrollRevealText({ text, progress }: ScrollRevealTextProps) {
  const words = text.split(' ')
  const textEndProgress = 0.42 // Text completes revealing at 42% of the scroll track

  return (
    <div className="relative w-full max-w-[1100px] mx-auto text-center px-4">
      <p className="flex flex-wrap justify-center text-[24px] sm:text-[38px] lg:text-[46px] xl:text-[52px] font-bold leading-[1.18] tracking-tight uppercase font-[family-name:var(--font-inter-tight)] select-none">
        {words.map((word, index) => {
          // Calculate step per word within the text scroll-range
          const step = textEndProgress / words.length
          const start = index * step
          const end = start + step * 3.5 // Smooth overlapping reveal
          
          const opacity = useTransform(
            progress,
            [Math.min(start, textEndProgress - 0.01), Math.min(end, textEndProgress)],
            [0, 1]
          )

          return (
            <span key={index} className="relative mr-[8px] sm:mr-[12px] mb-[4px] sm:mb-[6px] inline-block">
              {/* Faint backing text for layout structure */}
              <span className="opacity-[0.08] text-white select-none pointer-events-none">
                {word}
              </span>
              
              {/* Foreground revealed text */}
              <motion.span 
                style={{ opacity }} 
                className="absolute inset-0 text-white font-bold select-none pointer-events-none"
              >
                {word}
              </motion.span>
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the entire tall section (220vh)
  // start top: when the top of the section hits the top of the viewport
  // end bottom: when the bottom of the section hits the bottom of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Create a spring-smoothed version of the scroll progress for liquid-like motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 22,
    restDelta: 0.001
  })

  // Sequential image animations:
  // Photo starts fading up at 50% scroll and is fully complete at 88% scroll progress
  const imgStart = 0.50
  const imgEnd = 0.88
  const imgOpacity = useTransform(smoothProgress, [imgStart, imgEnd], [0, 1])
  const imgY = useTransform(smoothProgress, [imgStart, imgEnd], [200, 0])
  const imgScale = useTransform(smoothProgress, [imgStart, imgEnd], [0.93, 1])

  const loremIpsumText = 
    "WHETHER IT'S DESIGN, STRATEGY, OR TECHNICAL DEVELOPMENT, WE APPROACH EVERY PROBLEM WITH CREATIVITY, EXPERTISE, AND A FOCUS ON DELIVERING RESULTS THAT MAKE A DIFFERENCE."

  return (
    <section 
      ref={containerRef}
      className="relative h-[220vh] bg-[#171a1d]"
    >
      {/* Sticky container that pins in the viewport with a premium top padding */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start items-center px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-32 overflow-hidden">
        <div className="w-full max-w-[1440px] flex flex-col items-center justify-start">
          {/* Scroll-reveal typography */}
          <ScrollRevealText text={loremIpsumText} progress={smoothProgress} />

          {/* Scroll-linked fade-up user portrait */}
          <motion.div
            style={{ 
              opacity: imgOpacity, 
              y: imgY,
              scale: imgScale
            }}
            className="mt-6 sm:mt-8 w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[330px] max-h-[42vh] overflow-hidden rounded-[24px] shadow-2xl bg-black aspect-[2/3] relative group"
          >
            <Image
              src="/images/about-me.jpg"
              alt="O mnie"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 767px) 100vw, 330px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
