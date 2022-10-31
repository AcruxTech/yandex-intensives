import './BooksPage.css'
import { Genres } from '../../components/Genres/Genres'
import { Books } from '../../components/Books/Books' 

 
export const BooksPage = ({ books }) => {
    return <div className='books-page'>
        <Genres books={books}></Genres>
        <Books books={books}></Books>
    </div>
}