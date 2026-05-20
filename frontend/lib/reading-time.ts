import {type PortableTextBlock} from 'next-sanity'

const WORDS_PER_MINUTE = 200

function collectText(value: unknown): string {
  if (!value) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value.map(collectText).join(' ')
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>

    if (typeof record.text === 'string') {
      return record.text
    }

    if (Array.isArray(record.children)) {
      return collectText(record.children)
    }
  }

  return ''
}

export function calculateReadingTime(content: PortableTextBlock[] | null | undefined) {
  const text = collectText(content)
  const words = text.trim().split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
