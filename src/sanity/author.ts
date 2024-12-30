import { defineType, defineField } from "sanity";
import { StringRule } from "@sanity/types";


export const author = defineType({
    name: 'author',
    type: 'document',
    title: 'Author',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Author Name',
            validation: (Rule: StringRule) => Rule.required().error("This field is required.")
        }),
    ]
})