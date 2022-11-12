import './Book.css' 
import { BookCounter } from '../BookCounter/BookCounter'
import { StarsDisplay } from '../StarsDisplay/StarsDisplay'
import { useSelector } from 'react-redux'
import { selectBookById } from '../../store/book/selectors'
import { NavLink } from 'react-router-dom'

export const Book = ({ bookId }) => {
    const book = useSelector(state => selectBookById(state, bookId));
    
    const link = '/books/'+bookId;
    return (
        <div className='book'>
            <div className='book-info'>
                <NavLink to={link} style={{ textDecoration: 'none' }} className='book-info__title'>
                    { book.title }
                </NavLink>
                <div className='book-info-minor'>
                    <span className='book-info-minor__author'>{ book.author }</span>
                    <span className='book-info-minor__genre'>{ book.genre }</span>
                    <StarsDisplay amount={book.stars}></StarsDisplay>
                </div>
                <span className='book-info__cost'>{ book.cost }</span>
            </div>
            <BookCounter bookId={bookId}></BookCounter>
        </div>
    )
}
