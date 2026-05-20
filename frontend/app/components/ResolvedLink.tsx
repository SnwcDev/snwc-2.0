import Link from 'next/link'
import {Children} from 'react'

import {linkResolver} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'
import ScrambleText from '@/app/components/ScrambleText'

interface ResolvedLinkProps {
  link: DereferencedLink
  children: React.ReactNode
  className?: string
}

export default function ResolvedLink({link, children, className}: ResolvedLinkProps) {
  // resolveLink() is used to determine the type of link and return the appropriate URL.
  const resolvedLink = linkResolver(link)
  const childArray = Children.toArray(children)
  const textContent = childArray.every(
    (child) => typeof child === 'string' || typeof child === 'number',
  )
    ? childArray.join('')
    : null
  const content = textContent ? <ScrambleText text={textContent} /> : children

  if (typeof resolvedLink === 'string') {
    return (
      <Link
        href={resolvedLink}
        target={link?.openInNewTab ? '_blank' : undefined}
        rel={link?.openInNewTab ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {content}
      </Link>
    )
  }
  return <>{children}</>
}
