import {defineLive} from 'next-sanity/live'
import {client} from '@/sanity/lib/client'
import {token} from '@/sanity/lib/token'

/**
 * Use defineLive to enable automatic revalidation and refreshing of your fetched content
 * Learn more: https://github.com/sanity-io/next-sanity?tab=readme-ov-file#1-configure-definelive
 */

const hasSanityConfig =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id' && token !== 'replace-me'

type SanityLiveExports = ReturnType<typeof defineLive>

const live = (hasSanityConfig
  ? defineLive({
      client,
      // Required for showing draft content when the Sanity Presentation Tool is used, or to enable the Vercel Toolbar Edit Mode
      serverToken: token,
      // Required for stand-alone live previews, the token is only shared to the browser if it's a valid Next.js Draft Mode session
      browserToken: token,
    })
  : {
      sanityFetch: (async () => ({
        data: null,
        sourceMap: null,
        tags: [],
      })) as unknown as SanityLiveExports['sanityFetch'],
      SanityLive: () => null,
    }) as SanityLiveExports

export const {sanityFetch, SanityLive} = live
