import './Book.css' 
import { BookCounter } from '../BookCounter/BookCounter'
import { StarsDisplay } from '../StarsDisplay/StarsDisplay'
 

export const Book = ({ book }) => {
    return <div className='book'>
       <div className='book-info'>
            <span className='book-info__title'>{ book.title }</span>
            <div className='book-info-minor'>
                <span className='book-info-minor__author'>{ book.author }</span>
                <span className='book-info-minor__genre'>{ book.genre }</span>
                <StarsDisplay amount={book.stars}></StarsDisplay>
            </div>
            <span className='book-info__cost'>{ book.cost }</span>
       </div>
       <BookCounter></BookCounter>
    </div>
}
