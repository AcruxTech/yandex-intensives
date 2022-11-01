import './Book.css' 
import { BookCounter } from '../BookCounter/BookCounter'
 

export const Book = ({ book }) => {
    console.log(book)
    
    return <div className='book'>
       <div className='book-info'>
            <span className='book-info__title'>{ book.title }</span>
            <div className='book-info-minor'>
                <span className='book-info-minor__author'>{ book.author }</span>
                <span className='book-info-minor__genre'>{ book.genre }</span>
            </div>
            <span className='book-info__cost'>{ book.cost }</span>
       </div>
       <BookCounter></BookCounter>
    </div>
}
