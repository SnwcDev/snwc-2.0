import LatestPostsClient from '@/app/components/LatestPostsClient'
import {sanityFetch} from '@/sanity/lib/live'
import {latestPostsQuery} from '@/sanity/lib/queries'

const fallbackPosts = [
  {
    _id: 'mock-1',
    title: 'AI w pracy zespołu DevOps: automatyzacja, która nie robi bałaganu',
    slug: 'ai-w-pracy-zespolu-devops',
    date: '2026-05-05T12:00:00.000Z',
    category: 'DevOps',
    difficulty: 'sredni',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    },
    content: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'a '.repeat(1200)}], // ~1200 words = ~6 min reading time
      },
    ],
  },
  {
    _id: 'mock-2',
    title: 'Docker, Kubernetes i sensowny start z kontenerami w 2026',
    slug: 'docker-kubernetes-start-2026',
    date: '2026-05-04T12:00:00.000Z',
    category: 'Kontenery',
    difficulty: 'poczatkujacy',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    },
    content: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'a '.repeat(800)}], // ~800 words = ~4 min reading time
      },
    ],
  },
  {
    _id: 'mock-3',
    title: 'Monitoring aplikacji: co warto mierzyć, zanim pojawi się problem',
    slug: 'monitoring-aplikacji-co-mierzyc',
    date: '2026-05-03T12:00:00.000Z',
    category: 'Monitoring',
    difficulty: 'zaawansowany',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    },
    content: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'a '.repeat(1000)}], // ~1000 words = ~5 min reading time
      },
    ],
  },
]

export default async function LatestPosts() {
  const {data} = await sanityFetch({query: latestPostsQuery}).catch(() => ({data: null}))
  const posts = data && data.length > 0 ? data : fallbackPosts

  return (
    <section id="latest-posts" className="bg-[#171a1d] px-6 pb-28 pt-20 text-white sm:pb-32 sm:pt-24 lg:px-10">
      <div className="mx-auto w-full max-w-[1440px]">
        <LatestPostsClient posts={posts} />
      </div>
    </section>
  )
}
