import './Books.css'
import { Book } from '../../components/Book/Book' 

 
export const Books = ({ bookIds }) => {
    return <div className='books'>
        {
            bookIds.map((id, i) => <Book key={i} bookId={id}></Book>)
        }
    </div>
}