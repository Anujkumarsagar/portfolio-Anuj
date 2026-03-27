import { CollectionConfig } from 'payload/types';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'featured'],
  },
  fields: [
    {
      name: 'title',
      label: 'Project Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Project Slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'longDescription',
      label: 'Long Description (for detail page)',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Project Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'images',
      label: 'Project Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { label: 'Web Development', value: 'web' },
        { label: 'Mobile Development', value: 'mobile' },
        { label: 'UI/UX Design', value: 'design' },
        { label: 'Full Stack', value: 'fullstack' },
        { label: 'AI/ML', value: 'ai' },
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
      name: 'technologies',
      label: 'Technologies Used',
      type: 'array',
      fields: [
        {
          name: 'tech',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'liveUrl',
      label: 'Live Project URL',
      type: 'text',
    },
    {
      name: 'githubUrl',
      label: 'GitHub Repository URL',
      type: 'text',
    },
    {
      name: 'year',
      label: 'Project Year',
      type: 'number',
    },
    {
      name: 'featured',
      label: 'Featured Project',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'award',
      label: 'Award/Recognition',
      type: 'text',
      admin: {
        description: 'E.g., "Awwwards Winner", "Best Design", etc.',
      },
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
    },
  ],
};
