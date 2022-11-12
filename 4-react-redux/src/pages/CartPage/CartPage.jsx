import './CartPage.css'
import { Book } from '../../components/Book/Book'
import { useDispatch, useSelector } from 'react-redux'
import { selectBooks } from '../../store/cart/selectors'
import { CartItem } from '../../components/CartItem/CartItem'

 
export const CartPage = () => {
    const dispatch = useDispatch()
    let books = useSelector(state => selectBooks(state))

    let cart = []
    for (let book in books) {
        cart.push({ id: book, amount: books[book]})
    }
    console.log(cart)

    return <div className='cart-page'>
        <div className='cart-page__order'>
            <h2 className='cart-page__order-text'>Ваш заказ:</h2>
            <ul className='cart-page__order-list'>
                {
                    cart.map(
                        (book, i) => <CartItem key={i} className='cart-page__order-list__item' bookId={book.id}/>
                    )
                }
            </ul>
            <div className='cart_page__order-info'> 
                <h2>Итого: 0руб</h2>
                <button className='cart_page__order-info-btn'>Купить</button>
            </div>
        </div>
        <div className='cart-page__books'>        
            {
                cart.map((book, i) => <Book key={i} bookId={book.id}></Book>)
            }
        </div>
    </div>
}