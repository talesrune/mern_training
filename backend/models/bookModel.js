const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
     },
     genre:{
         type: String,
         required:true,
		 enum: ['sol','horror','romance','action']
     },
     price: {
         type:Number,
         required:true,
         min: 0
     },
     email: { type: String, required: true}
}, {timestamps:true})


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;