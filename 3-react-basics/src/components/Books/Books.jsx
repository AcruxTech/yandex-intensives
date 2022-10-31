import { Book } from '../../components/Book/Book' 

 
export const Books = ({ books }) => {
    return <div>
        {
            books.map((book, i) => <Book key={i} book={book}></Book>)
        }
    </div>
}