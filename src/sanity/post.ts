import { defineType, defineField, defineArrayMember } from "sanity";
import { StringRule } from "@sanity/types";
import { SlugRule } from "@sanity/types";


export const post = defineType(  {   // Define Type is used to allow the suggesstion of the type in the schema.
    name: 'post',
    type: 'document',
    title: 'Post',
    fields:[
        defineField({   // Define Field is used to allow the suggesstion of the type in the schema.
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule:StringRule) => Rule.required().error("This field is required.")
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: SlugRule ) => Rule.required().error("This field is required.")
        }),

        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: (Rule: StringRule) => Rule.required().error("This field is required.")
        }),

        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),

        defineField({
            name: 'content',
            type: 'array',
            title: 'Blog Content',
            of:[
                defineArrayMember({   // defineArrayMember is used to allow the suggesstion of array type in the schema..
                        type: 'block',
                })
            ]
        }),

        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [{type: 'author'}],
        }),

        defineField({
            title: 'Release date',
            name: 'date',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
            }
          })

        
    ]
})