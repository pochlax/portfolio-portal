export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "company",
            type: "string"
        },
        {
            name: "position",
            type: "string"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'company',
              maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "datetime"
        },
        {
            name: "endDate",
            title: "End Date",
            type: "datetime"
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            }
        }
    ]
}