import './BookCounter.css';
import { selectBookCount } from '../../store/cart/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../store/cart';


export const BookCounter = ({ bookId }) => {
    const dispatch = useDispatch();
    let count = useSelector(state => selectBookCount(state, bookId));

    return <div className='book-counter'>
        <button className='book-counter__minus' 
            onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
            disabled={!count}
        >
            -
        </button>
        <div className='book-counter__count'> {count || 0} </div>
        <button className='book-counter__plus' 
            onClick={() => dispatch(cartSlice.actions.addBook(bookId))}
        >
            +
        </button>
    </div>
};