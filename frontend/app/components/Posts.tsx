import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery, allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import Image from '@/app/components/SanityImage'
import OnBoarding from '@/app/components/Onboarding'
import Avatar from '@/app/components/Avatar'
import {dataAttr} from '@/sanity/lib/utils'
import FlickerText from '@/app/components/FlickerText'
import ScrambleText from '@/app/components/ScrambleText'

const difficultyLabels: Record<string, string> = {
  poczatkujacy: 'Początkujący',
  sredni: 'Średni',
  'srednio-zaawansowany': 'Średnio-zaawansowany',
  zaawansowany: 'Zaawansowany',
}

const Post = ({post}: {post: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, author, coverImage, difficulty, category} = post

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
      key={_id}
      className="border border-gray-200 rounded-sm bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative overflow-hidden"
    >
      <Link className="hover:text-brand underline transition-colors" href={`/posts/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      {coverImage?.asset?._ref && (
        <Image
          id={coverImage.asset._ref}
          alt={coverImage.alt || title || ''}
          className="aspect-[16/9] w-full object-cover"
          width={960}
          height={540}
          mode="cover"
          hotspot={coverImage.hotspot}
          crop={coverImage.crop}
        />
      )}
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2 text-xs font-mono text-gray-600">
          {category && (
            <span className="border border-gray-200 bg-white px-2 py-1">
              <ScrambleText text={category} variant="label" />
            </span>
          )}
          {difficulty && (
            <span className="border border-gray-200 bg-white px-2 py-1">
              <ScrambleText text={difficultyLabels[difficulty] || difficulty} variant="label" />
            </span>
          )}
        </div>
        <h3 className="text-2xl mb-4">{title && <FlickerText text={title} />}</h3>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600 max-w-[70ch]">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mx-6 pb-6 pt-4 border-t border-gray-100">
        {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )}
        <time className="text-gray-500 text-xs font-mono" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode
  heading?: string
  subHeading?: string
}) => (
  <div>
    {heading && (
      <h2 className="text-3xl text-gray-900 sm:text-4xl lg:text-5xl">
        <FlickerText text={heading} />
      </h2>
    )}
    {subHeading && <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>}
    <div className="pt-6 space-y-6">{children}</div>
  </div>
)

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  }).catch(() => ({data: null}))

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}

export const AllPosts = async () => {
  const {data} = await sanityFetch({query: allPostsQuery}).catch(() => ({data: null}))

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Posts
      heading="Recent Posts"
      subHeading={`${data.length === 1 ? 'This blog post is' : `These ${data.length} blog posts are`} populated from your Sanity Studio.`}
    >
      {data.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}
