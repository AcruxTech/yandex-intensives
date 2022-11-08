import './BookPage.css'
import { Book } from '../../components/Book/Book'
import { Annotation } from '../../components/Annotation/Annotation'
import { Reviews } from '../../components/Reviews/Reviews'

 
export const BookPage = ({ book }) => {
    return <div className='book-page'>
        <div className='book-page__info'>
            <div className='book-wrapper'><Book book={book}></Book></div>
            <div className='annotation-wrapper'><Annotation annotation={book.annotation}></Annotation></div>
        </div>
        <Reviews reviews={book.reviews}></Reviews>
    </div>
}