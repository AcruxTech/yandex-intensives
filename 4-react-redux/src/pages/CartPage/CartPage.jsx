import './CartPage.css'
import { Book } from '../../components/Book/Book'

 
export const CartPage = ({ books }) => {
    return <div className='cart-page'>
        <div className='cart-page__order'>
            <h2 className='cart-page__order-text'>Ваш заказ:</h2>
            <ul className='cart-page__order-list'>
                {
                    books.map(
                        (book, i) => <li key={i} className='cart-page__order-list__item'>{ book.title }</li>
                    )
                }
            </ul>
            <div className='cart_page__order-info'> 
                <h2>Итого: 1000руб</h2>
                <button className='cart_page__order-info-btn'>Купить</button>
            </div>
        </div>
        <div className='cart-page__books'>
            {
                books.map((book, i) => <Book key={i} book={book}></Book>)
            }
        </div>
    </div>
}