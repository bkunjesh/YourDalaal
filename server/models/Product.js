const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        // title: {
        //     type: String,
        //     default: 'n/a'
        // },
        category: {
            type: String,
            default: 'n/a'
        },
        images: {
            type: String,
            default: 'https://source.unsplash.com/collection/190727'
        },
        price: {
            type: Number,
            default: '40000'
        },
        desc: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias numquam nulla blanditiis obcaecati itaque vero, eveniet similique nostrum suscipit."
        }
    },
    ownerID: {
        type: String,
        // required: true
    }

}, { timestamps: true })





module.exports = mongoose.model('Product', ProductSchema);