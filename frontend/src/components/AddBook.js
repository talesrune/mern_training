import { useState } from 'react';
const AddBook = () => {
    // const [text, setText]  = useState('')
    // const [day, setDay] = useState('')
    // const [reminder, setReminder] = useState(false)

    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     if(!text) {
    //         alert('Please add a task')
    //         return
    //     }

    //     onAdd({text, day, reminder})
    //     setText('')
    //     setDay('')
    //     setReminder(false)
    // }


    return (
        <form className='add-form' onSubmit={null}>
            <div className='form-control'>
            <label>Title:</label>
            <input type = 'text' /> 
            </div>
            <div className='form-control'>
            <label>Genre: </label>
            <input type = 'text'/>
            </div>
            <div className='form-control'>
            <label>Price: </label>
            <input type = 'text'/>
            </div>
            
            <input type = 'submit' value = 'Add new Book' className='btn'/>
        </form>
    )
}

export default AddBook
