import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
        },
      ],
    },
    {
      name: 'githubUrl',
      type: 'text',
      admin: {
        description: 'Primary GitHub repository URL (or frontend repo if split)',
      },
    },
    {
      name: 'githubBackendUrl',
      type: 'text',
      admin: {
        description: 'Backend GitHub repository URL (only if separate from frontend)',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
    },
    {
      name: 'image',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    }
  ],
}
