import { useEffect , useState } from 'react';
const Home = () => {

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

  return (
    
    <div className="book-container">

      <form>
        <h2>Book Store</h2>
        <div className="books">
          {books && books.map((book)=>(
            <div className='book-details'>
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