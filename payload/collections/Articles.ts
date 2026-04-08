import { CollectionConfig } from 'payload'
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
import { transporter } from '@/lib/nodemailer'
import { messagingServer } from '@/lib/firebaseAdmin'

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
  hooks: {
    afterChange: [
      async ({doc, operation, req}) => {
        if(operation === "create"){
          // create a queue 
          const getSubscribers = await req.payload.find({
            collection: "subscrib-news-letters"
          })

          getSubscribers.docs.forEach((subscriber) => {
            transporter.sendMail({
              from: '"Portfolio Contact" <samajseva62@gmail.com>',
              to: `${subscriber.email}`,
              subject: "New Article Published",
              html: `
                <h1>New Article Published</h1>
                <p>Check out the latest article on our website</p>
                <a href="https://cvanuj.vercel.com/articles/${doc.slug}">Read More</a>
              `,
            })
          })

          // Send Push Notification via FCM
          if (messagingServer) {
            try {
              const getPushSubscribers = await req.payload.find({
                collection: "push-subscribers",
                limit: 1000, // Should handle pagination in a real very large app
              })

              const tokens = getPushSubscribers.docs.map(sub => sub.token).filter(Boolean) as string[];
              
              if (tokens.length > 0) {
                const message = {
                  notification: {
                    title: `New Article: ${doc.title}`,
                    body: doc.description || "Read our latest article!",
                    // You can add an image if you have an absolute URL
                  },
                  webpush: {
                    fcmOptions: {
                      link: `https://cvanuj.vercel.com/articles/${doc.slug}`,
                    }
                  },
                  tokens: tokens,
                };

                const response = await messagingServer.sendEachForMulticast(message);
                console.log(response.successCount + ' messages were sent successfully');
                if (response.failureCount > 0) {
                  console.warn(response.failureCount + ' messages failed.');
                }
              }
            } catch (error) {
              console.error("Error sending push notifications", error);
            }
          }

        }
      }
    ]
  }
}
