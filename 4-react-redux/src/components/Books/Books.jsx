import './Books.css'
import { Book } from '../../components/Book/Book' 

 
export const Books = ({ books, active}) => {
    let books_by_categoty = []

    books.forEach(book => {
        if (book.category === active) {
            books_by_categoty.push(book)
        }
    });

    return <div className='books'>
        {
            books_by_categoty.map((book, i) => <Book key={i} book={book}></Book>)
        }
    </div>
}