import {DocumentTextIcon} from '@sanity/icons'
import {format, parseISO} from 'date-fns'
import {defineField, defineType} from 'sanity'
import type {Post} from '../../../sanity.types'

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const post = defineType({
  name: 'post',
  title: 'Post',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is required for the post to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Treść wpisu',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Krótki opis',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Obraz główny (hero image)',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              const document = context.document as Post
              if (document?.coverImage?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
    }),
    defineField({
      name: 'difficulty',
      title: 'Poziom trudności',
      type: 'string',
      options: {
        list: [
          {title: 'Początkujący', value: 'poczatkujacy'},
          {title: 'Średni', value: 'sredni'},
          {title: 'Średnio-zaawansowany', value: 'srednio-zaawansowany'},
          {title: 'Zaawansowany', value: 'zaawansowany'},
        ],
        layout: 'radio',
      },
      initialValue: 'poczatkujacy',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategoria wpisu',
      type: 'string',
      description: 'Np. Next.js, Sanity, SEO, Tutorial, Case study.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data publikacji',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
    }),
  ],
  // List preview configuration. https://www.sanity.io/docs/previews-list-views
  preview: {
    select: {
      title: 'title',
      authorFirstName: 'author.firstName',
      authorLastName: 'author.lastName',
      date: 'date',
      category: 'category',
      difficulty: 'difficulty',
      media: 'coverImage',
    },
    prepare({title, media, authorFirstName, authorLastName, date, category, difficulty}) {
      const subtitles = [
        category,
        difficulty,
        authorFirstName && authorLastName && `by ${authorFirstName} ${authorLastName}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
