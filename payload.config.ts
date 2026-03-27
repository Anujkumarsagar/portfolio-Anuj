import path from 'path';
import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';
import { Projects } from './payload/collections/Projects';
import { Articles } from './payload/collections/Articles';
import { Users } from './payload/collections/Users';

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Users, Projects, Articles],
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    url: process.env.POSTGRES_URL || process.env.DATABASE_URL!,
  }),
});
