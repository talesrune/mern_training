import { useEffect , useState } from 'react';
import AddBook from '../components/AddBook'
import jwtdecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const Home = () => {
  const navigate = useNavigate()
  const [showAddBook, setShowAddBook] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  //Temporary books
  const [books, setBooks] = useState(
    [
        // {
        //     "title": "k-on",
        //     "genre": "sol",
        //     "price": 25,
        //     "email": "tw3@gmail.com"
        //   },
        //   {
        //     "title": "another",
        //     "genre": "horror",
        //     "price": 45,
        //     "email": "tw3@gmail.com"
        //   },
        //   {
        //     "title": "amagami ss",
        //     "genre": "romance",
        //     "price": 27,
        //     "email": "tw3@gmail.com"
        //   }
    
    ]
  )

  const toggleForm = async()=> {
		setShowAddBook(!showAddBook)
	}

  const getBooks = async(email_recent) => {
    axios({
      method: 'get', //you can set what request you want to be
      url: 'http://localhost:4000/api/books/email',
      headers: {
        'email': email_recent
      }
    }).then(resp => {
      if (resp.data) {
        setBooks(resp.data)
      } 
    }).catch(function (error) {
      console.log(error);
    });
    
  }

  const verify_token = async() => {
     axios({
      method: 'get', //you can set what request you want to be
      url: 'http://localhost:4000/api/login/verify-token',
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    }).then(resp => {
      if (resp.data.status === 'ok') {
        setUsername(resp.data.username)
        setEmail(resp.data.email)
        console.log('token is working')
        getBooks(resp.data.email)
      } else {
        alert(resp.data.error)
      }
    }).catch(function (error) {
      console.log(error);
    });
    
  }

  useEffect(()=>{
    const token = localStorage.getItem('token')
		if (token) {
		 	const user = jwtdecode(token)
		 	if (!user) {
         console.log('not log in!')
		  	 localStorage.removeItem('token')
		  	 navigate('/login')
		 	} else {
		 		verify_token()
		 	}
		} else {
      console.log('no token, invalid!')
      alert('Unauthorized access, please log in')
      navigate('/login')
    }
  }, []) //this [] makes it runs first render only

  const userLogout = async()=> {
    localStorage.removeItem('token')
    navigate('/login');
  }

  return (
    
    <div className="book-container">

      {showAddBook && <AddBook email={email} updateBooks={getBooks}/>}
      <h2>{username}'s Book Store 
        <button onClick={toggleForm}> {(showAddBook)?'Close form':'Add new'}</button>
        <input type="button" className="btn2" value="Logout" onClick={userLogout}></input>
      </h2>
      <form>
        
        <div className="books">
          {books && books.map((book)=>(
            <div className='book-details' key={book._id}>
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