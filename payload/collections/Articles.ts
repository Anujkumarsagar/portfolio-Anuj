import type { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  HTMLConverterFeature,
  lexicalHTML,
  AlignFeature,
  BlocksFeature,
  HeadingFeature,
  BlockquoteFeature,
  InlineCodeFeature,
  UploadFeature,
  RelationshipFeature,
} from '@payloadcms/richtext-lexical'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'readTime',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
      required: true,
    },
    {
      name: 'embedurl',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          AlignFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          BlockquoteFeature(),
          InlineCodeFeature(),
          UploadFeature({
            collections: {
              media: {
                fields: [],
              },
            },
          }),
          RelationshipFeature(),
          HTMLConverterFeature({}),
        ],
      }),
      required: true,
    },
    lexicalHTML('content', { name: 'content_html' }),
  ],
}
