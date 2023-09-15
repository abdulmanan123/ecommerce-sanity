export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: "Cars", value: "cars"},
                    {title: "Bikes", value: "bikes"},
                    {title: "Laptops", value: "laptops"},
                    {title: "Mobiles", value: "mobiles"},
                    {title: "Home", value: "home"},
                    {title: "Office", value: "office"},
                    {title: "Shop", value: "shop"},
                    {title: "Plot", value: "plot"},
                    {title: "Appliances", value: "appliances"},
                    {title: "Furniture", value: "furniture"},
                    {title: "Books", value: "books"},
                    {title: "Pets", value: "pets"},
                    {title: "Fashion", value: "fashion"},
                    {title: "Others", value: "others"},
                    {title: "Female", value: "Female"},
                    {title: "Male", value: "Male"},
                    {title: "Kids", value: "Kids"}
                ],
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string',
            options: {
                list: [
                    {title: "Sweater", value: "Sweater"},
                    {title: "Dress", value: "Dress"},
                    {title: "T Shirts", value: "T Shirts"},
                    {title: "Pants", value: "Pants"},
                    {title: "Jackets", value: "Jackets"}
                ],
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { 
                source: "name",
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'care',
            title: 'Care',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: { 
                hotspot: true,
            }
        }
    ]
}