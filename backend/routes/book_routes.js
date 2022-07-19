const express = require('express')
const router = express.Router();
const Book = require('../models/bookModel')
const mongoose = require('mongoose'); //it is requrired for validate id

//get all books
router.get('/', async (req, res) =>{ // to access this '/api/books/
    const books = await Book.find({}).sort({username:1})
    console.log('get every book');
    //res.send('watup')
    res.status(200).json(books)
});

//verify token
router.get('/email', async (req, res) => { //'/api/login/verify-token'
	const email = req.headers['email']
  console.log('get book by email')
	const books = await Book.find({email:email}).sort({username:1})
  res.status(200).json(books)
})

//get single book using id
router.get('/:id', async (req, res) =>{ // to access this '/api/books/:id
	const {id} = req.params  
	console.log('get book ' + id);
  
	if(!mongoose.Types.ObjectId.isValid(id)) {
	  return res.status(404).json({error:'Invalid id, No such book'})
	}
  
	const book = await Book.findById(id)
	if(!book) {
	  return res.status(404).json({error:'No such book'})
	}
	res.status(200).json(book)
  
});

//post new book
router.post('/', async (req, res) => { // to access this '/api/books/'
	
	console.log('POS');
    const {title, genre, price, email} = req.body

    let emptyFields = []
    
    if(!title){
      emptyFields.push('title')
    }
    if(!genre){
      emptyFields.push('genre')
    }
    if(!price){
      emptyFields.push('price')
    }
    if(!email){
      emptyFields.push('email')
    }
    if(emptyFields.length > 0){
      return res.status(400).json({error:'Please fill in all the fields', emptyFields})
    }
    try{
        const book = await Book.create({title, genre, price,email})
        res.status(200).json({status: 'ok', newbook:book})

    }catch(error){
        const sentence = error.message + ' Only proper genres are sol, horror, romance, action'
        res.status(400).json({status: 'error',error:sentence})
    }
});


router.delete('/:id', async(req, res) =>{ 
    console.log('delete');
    const {id} = req.params  
  
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error:'Cannot delete, Invalid id, No such book'})
    }
  
    const book = await Book.findOneAndDelete({_id:id}) //_id is saved on mongodb
    if(!book) {
      return res.status(404).json({error:'Cannot delete, No such book'})
    }
    res.status(200).json({status:'ok', deleted:book})
});

router.patch('/:id', async(req, res) =>{ 
    console.log('update');
    const {id} = req.params  
  
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error:'Cannot update, Invalid id, No such workout'})
    }
  
    const book = await Book.findOneAndUpdate({_id:id}, {...req.body} ) //_id is saved on mongodb
    if(!book) {
      return res.status(404).json({error:'Cannot update, No such book'})
    }
    res.status(200).json({status:'ok', updated:book})   
    
});

module.exports = router