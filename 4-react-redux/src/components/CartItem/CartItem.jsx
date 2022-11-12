import { useSelector } from 'react-redux';
import { selectBookById } from '../../store/book/selectors';


export const CartItem = ({ bookId }) => {
    const book = useSelector(state => selectBookById(state, bookId));
    
    return (
        <span style={{ fontWeight: 700 }}>
            { book.title }
        </span>
    )
}
