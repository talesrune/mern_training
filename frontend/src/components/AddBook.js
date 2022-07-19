import { useState } from 'react';
import axios from 'axios';

const AddBook = ({email, updateBooks}) => {
  
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState('')

    const addNewBook = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/books/', {
            title: title,
            genre: genre,
            price: price,
            email: email,
        })    
        .then(resp => {
            console.log(resp.data)
            console.log(resp.status)
            if(resp.status != 200) { //will not come here if got error, it moves to catch
                console.log('here')
                console.log(resp.data.status)
                alert(resp.data.emptyFields)
            } else{
                setTitle('')
                setGenre('')
                setPrice('')
                console.log('new workout added')
                updateBooks(email)
            }
      
        })
        .catch(function (error) {
            console.log('here2')
            console.log(error.response.data.error);
            alert(error.response.data.error);
        });
    }


    return (
        <form className='add-form' onSubmit={addNewBook}>
            <div className='form-control'>
            <label>Title:</label>
            <input type = 'text' value={title} onInput={e => setTitle(e.target.value)}/> 
            </div>
            <div className='form-control'>
            <label>Genre: </label>
            <input type = 'text' value={genre} onInput={e => setGenre(e.target.value)}/>
            </div>
            <div className='form-control'>
            <label>Price: </label>
            <input type = 'text' value={price} onInput={e => setPrice(e.target.value)}/>
            </div>
            
            <input type = 'submit' value = 'Add new Book' className='btn'/>
        </form>
    )
}

export default AddBook
