import './BookPage.css'
import { Book } from '../../components/Book/Book'
import { Annotation } from '../../components/Annotation/Annotation'
import { Reviews } from '../../components/Reviews/Reviews'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBookById } from '../../store/book/selectors'

 
export const BookPage = () => {
    const params = useParams();
    console.log(params.bookId)
    const book = useSelector(state => selectBookById(state, 'd75f762a-eadd-49be-8918-ed0daa8dd024'));
    console.log(book)

    return <div className='book-page'>
        <div className='book-page__info'>
            <div className='book-wrapper'><Book book={book}></Book></div>
            <div className='annotation-wrapper'><Annotation annotation={book.annotation}></Annotation></div>
        </div>
        <Reviews reviews={book.reviews}></Reviews>
    </div>
}