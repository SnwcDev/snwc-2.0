import Image from 'next/image'
import Link from 'next/link'
import {ArrowUpRight, CornerDownRight} from 'lucide-react'
import FlickerText from '@/app/components/FlickerText'
import ScrambleText from '@/app/components/ScrambleText'

const latestPosts = [
  {
    title: 'AI w pracy zespołu DevOps: automatyzacja, która nie robi bałaganu',
    readingTime: '6 min',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Docker, Kubernetes i sensowny start z kontenerami w 2026',
    readingTime: '4 min',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Monitoring aplikacji: co warto mierzyć, zanim pojawi się problem',
    readingTime: '5 min',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function LatestPosts() {
  return (
    <section id="latest-posts" className="bg-[#050607] px-6 pb-28 pt-20 text-white sm:pb-32 sm:pt-24 lg:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between gap-8 max-[767px]:mb-8 max-[767px]:items-start">
          <div className="flex items-center gap-4">
            <CornerDownRight
              aria-hidden
              className="mt-2 h-9 w-9 shrink-0 -rotate-90 text-white max-[767px]:h-7 max-[767px]:w-7"
              strokeWidth={1.4}
            />
            <h2 className="m-0 font-[family-name:var(--font-inter-tight)] text-[56px] font-normal leading-[1.05] tracking-normal text-white max-[991px]:text-[48px] max-[767px]:text-[38px]">
              <FlickerText text="Najnowsze wpisy" />
            </h2>
          </div>
          <Link
            className="group inline-flex shrink-0 items-center gap-2 font-[family-name:var(--font-inter-tight)] text-[16px] font-medium leading-none text-white/90 transition-colors hover:text-white max-[767px]:pt-3"
            href="/posts"
          >
            <ScrambleText text="Zobacz wszystkie" />
            <ArrowUpRight
              aria-hidden
              className="h-5 w-5 rounded-full bg-white text-[#050607] p-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.4}
            />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {latestPosts.map((post, index) => (
            <article
              className="group flex h-full overflow-hidden rounded-lg border border-white/[0.06] bg-[#0b0c0d] transition-colors hover:border-white/15 hover:bg-[#101214]"
              key={post.title}
            >
              <Link className="flex h-full w-full flex-col" href="/posts">
                <div className="relative aspect-[1.66] shrink-0 overflow-hidden rounded-t-lg bg-[#111317]">
                  <Image
                    alt=""
                    className="h-full w-full object-cover opacity-88 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
                    fill
                    priority={index === 0}
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                    src={post.image}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0)_42%,rgba(5,6,7,0.28)_100%)]" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="m-0 font-[family-name:var(--font-inter-tight)] text-[22px] font-normal leading-[1.35] tracking-normal text-white max-[479px]:text-[20px]">
                    <ScrambleText text={post.title} />
                  </h3>
                  <span className="mt-auto inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1.5 font-[family-name:var(--font-inter-tight)] text-[15px] font-normal leading-none text-[#c9ced8] max-[767px]:mt-6">
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
