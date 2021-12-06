export default {
    name: "technology",
    title: "Technology",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string"
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
            name: "technologyType",
            title: "Technology Type",
            type: "string",
            options: {
                list: [
                    {value: "backEnd", title: "Back End"},
                    {value: "frontEnd", title: "Front End"},
                    {value: "others", title: "Others"}
                ]
            }      
        },
    ]
}