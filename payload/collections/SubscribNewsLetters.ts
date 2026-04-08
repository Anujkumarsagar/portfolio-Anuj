import { CollectionConfig } from "payload";
import payload from "payload"
export const SubscribNewsLetters: CollectionConfig = {
    slug: "subscrib-news-letters",
    admin: {
        useAsTitle: "email",
    },
    access: {
        read: () => true,
        update: () => true,
        create: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: "email",
            type: "text",
            required: true,
        },
    ],

}