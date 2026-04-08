import { CollectionConfig } from 'payload'

export const PushSubscribers: CollectionConfig = {
  slug: 'push-subscribers',
  admin: {
    useAsTitle: 'token',
  },
  access: {
    read: () => true,
    // Typically you might want to restrict this or use an endpoint, but for simplicity we allow creation
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'token',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
  ],
}
