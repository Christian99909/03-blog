import { defineCollection, reference, z } from "astro:content";



const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image(),

        //Relaciones
        // author: z.string(),
        author: reference('author'),

        //Relaciones
        tags: z.array(z.string()),
    }),
});


const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
    })
})


export const collections = {

    blog: blogCollection,
    author: authorCollection,
};