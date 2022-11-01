import './BookPage.css'
import { useState } from 'react'
import { Book } from '../../components/Book/Book'
import { Annotation } from '../../components/Annotation/Annotation'
import { Reviews } from '../../components/Reviews/Reviews'

 
export const BookPage = ({ book }) => {
    return <div className='book-page'>
        <Book book={book}></Book>
        <Annotation annotation={book.annotation}></Annotation>
        <Reviews reviews={book.reviews}></Reviews>
    </div>
}