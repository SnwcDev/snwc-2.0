'use client'

import {motion} from 'framer-motion'
import {Sparkles} from 'lucide-react'

import {cn} from '@/lib/utils'

type AceternityCardProps = {
  className?: string
}

export function AceternityCard({className}: AceternityCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 12}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45, ease: 'easeOut'}}
      className={cn(
        'relative overflow-hidden border border-gray-200 bg-white px-5 py-4 shadow-sm',
        'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-brand before:to-transparent',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="grid size-9 place-items-center border border-gray-200 bg-gray-50 text-brand">
          <Sparkles className="size-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-black">Aceternity UI</p>
          <p className="text-xs text-gray-600">framer-motion, clsx, tailwind-merge, lucide-react</p>
        </div>
      </div>
    </motion.div>
  )
}
