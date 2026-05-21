"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'
import { urlForImage } from '@/sanity/lib/utils'

const difficultyLabels: Record<string, string> = {
  poczatkujacy: 'Początkujący',
  sredni: 'Średni',
  'srednio-zaawansowany': 'Średnio-zaawansowany',
  zaawansowany: 'Zaawansowany',
}

export function estimateReadingTime(content: any[] | null | undefined): number {
  if (!content || !Array.isArray(content)) return 1

  let totalWords = 0
  for (const block of content) {
    if (block._type === 'block' && block.children && Array.isArray(block.children)) {
      for (const child of block.children) {
        if (child.text && typeof child.text === 'string') {
          const words = child.text.trim().split(/\s+/).filter(Boolean).length
          totalWords += words
        }
      }
    }
  }

  const wpm = 200
  return Math.max(1, Math.round(totalWords / wpm))
}

interface LatestPostsClientProps {
  posts: any[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  }),
}

export default function LatestPostsClient({ posts }: LatestPostsClientProps) {
  const getImageUrl = (post: any) => {
    if (post.coverImage?.asset?._ref) {
      try {
        return urlForImage(post.coverImage).width(800).height(900).fit('crop').url() || ''
      } catch {
        return post.coverImage?.url || ''
      }
    }
    return post.coverImage?.url || ''
  }

  return (
    <div className="grid grid-cols-3 gap-6 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
      {posts.map((post, index) => {
        const imageUrl = getImageUrl(post)
        const readingTime = estimateReadingTime(post.content)
        
        let formattedDate = ''
        if (post.date) {
          try {
            formattedDate = format(new Date(post.date), 'd MMMM yyyy', { locale: pl })
          } catch {
            formattedDate = post.date
          }
        }

        return (
          <motion.article
            key={post._id || post.slug}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="group relative aspect-[5/6] sm:aspect-[8/9] overflow-hidden rounded-2xl bg-[#0b0c0d] transition-all duration-300 flex flex-col justify-end"
          >
            <Link className="absolute inset-0 z-30" href={`/posts/${post.slug}`} aria-label={post.title} />
            
            {imageUrl && (
              <div className="absolute inset-0 z-0 h-full w-full">
                <Image
                  alt={post.title || ''}
                  className="h-full w-full object-cover opacity-85 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                  fill
                  priority={index === 0}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  src={imageUrl}
                />
              </div>
            )}
            
            {/* Dark gradient shadow overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050607]/95 via-[#050607]/45 to-transparent pointer-events-none" />

            {/* Content overlay */}
            <div className="relative z-20 flex flex-col p-6 sm:p-7 pointer-events-none">
              {/* Row 1: Date and Reading Time */}
              <div className="flex items-center gap-1.5 font-[family-name:var(--font-inter-tight)] text-[14px] font-medium text-white/90">
                <span>{formattedDate}</span>
                <span className="text-[#f43f5e] font-bold mx-0.5 select-none">•</span>
                <span>{readingTime} min czytania</span>
              </div>

              {/* Row 2: Title */}
              <h3 className="mt-2.5 font-[family-name:var(--font-inter-tight)] text-[22px] sm:text-[24px] font-bold leading-[1.25] tracking-tight text-white group-hover:text-white/95 transition-colors">
                {post.title}
              </h3>

              {/* Row 3: Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {post.category && (
                  <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 font-[family-name:var(--font-inter-tight)] text-[13px] font-medium leading-none text-white transition-colors hover:bg-white/15">
                    {post.category}
                  </span>
                )}
                {post.difficulty && (
                  <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 font-[family-name:var(--font-inter-tight)] text-[13px] font-medium leading-none text-white transition-colors hover:bg-white/15">
                    {difficultyLabels[post.difficulty] || post.difficulty}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}
