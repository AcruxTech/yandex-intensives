import './BookPage.css'
import { Book } from '../../components/Book/Book'
import { Annotation } from '../../components/Annotation/Annotation'
import { Reviews } from '../../components/Reviews/Reviews'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookById } from '../../store/book/selectors'
import { useEffect } from 'react'
import { loadBooksIfNotExist } from '../../store/book/loadBooksIfNotExist'

 
export const BookPage = () => {
    const params = useParams();
    const dispatch = useDispatch()

    let book = useSelector(state => selectBookById(state, params.bookId));

    useEffect(() => {
        dispatch(loadBooksIfNotExist);
    }, []);

    if (!book) {
        return <span>Loading...</span>
    }

    return <div className='book-page'>
        <div className='book-page__info'>
            <div className='book-wrapper'><Book bookId={params.bookId}></Book></div>
            <div className='annotation-wrapper'><Annotation annotation={book.annotation}></Annotation></div>
        </div>
        <Reviews reviewIds={book.reviews}></Reviews>
    </div>
}