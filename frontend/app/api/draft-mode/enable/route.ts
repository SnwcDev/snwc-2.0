import {defineEnableDraftMode} from 'next-sanity/draft-mode'
import {draftMode} from 'next/headers'
import {NextRequest, NextResponse} from 'next/server'

import {client} from '@/sanity/lib/client'
import {token} from '@/sanity/lib/token'

/**
 * defineEnableDraftMode() is used to enable draft mode. Set the route of this file
 * as the previewMode.enable option for presentationTool in your sanity.config.ts
 * Learn more: https://github.com/sanity-io/next-sanity?tab=readme-ov-file#5-integrating-with-sanity-presentation-tool--visual-editing
 */

const draftModeHandler = defineEnableDraftMode({
  client: client.withConfig({token}),
})

export async function GET(request: NextRequest) {
  if (token === 'replace-me') {
    const draft = await draftMode()
    draft.enable()

    const redirectUrl = new URL('/', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return draftModeHandler.GET(request)
}
