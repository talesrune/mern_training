import { useEffect , useState } from 'react';
import AddBook from '../components/AddBook'
const Home = () => {

  const [showAddBook, setShowAddBook] = useState(false)
  //Temporary books
  const [books, setBooks] = useState(
    [
        {
            "title": "k-on",
            "genre": "sol",
            "price": 25,
            "email": "tw3@gmail.com"
          },
          {
            "title": "another",
            "genre": "horror",
            "price": 45,
            "email": "tw3@gmail.com"
          },
          {
            "title": "amagami ss",
            "genre": "romance",
            "price": 27,
            "email": "tw3@gmail.com"
          }
    
    ]
  )

  const toggleForm = async()=> {
		setShowAddBook(!showAddBook)
	}

  return (
    
    <div className="book-container">

      {showAddBook && <AddBook />}
      <h2>Book Store <button onClick={toggleForm}> {(showAddBook)?'Close form':'Add new'}</button></h2>
      <form>
        
        <div className="books">
          {books && books.map((book)=>(
            <div className='book-details' key={book.title}>
              <h3>{book.title}</h3>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Price:</strong> {book.price}</p>
              <p>{book.createdAt}</p>
              <span onClick={null}>delete</span>
            </div>
          ))}
        
        </div>
      </form>
    </div>
    
  )
}

export default Home