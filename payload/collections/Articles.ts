import { CollectionConfig } from 'payload/types';

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt', 'featured'],
  },
  fields: [
    {
      name: 'title',
      label: 'Article Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Article Slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Excerpt (Short Description)',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      label: 'Article Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      defaultValue: 'Anuj Kumar',
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { label: 'Web Development', value: 'web' },
        { label: 'Mobile Development', value: 'mobile' },
        { label: 'UI/UX Design', value: 'design' },
        { label: 'DevOps', value: 'devops' },
        { label: 'AI/ML', value: 'ai' },
        { label: 'Learning', value: 'learning' },
      ],
      required: true,
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'readingTime',
      label: 'Reading Time (minutes)',
      type: 'number',
    },
    {
      name: 'featured',
      label: 'Featured Article',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'publishedAt',
      label: 'Published Date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      required: true,
    },
    {
      name: 'updatedAt',
      label: 'Last Updated',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
};
