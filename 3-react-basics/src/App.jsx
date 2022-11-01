import { Layout } from './components/Layout/Layout';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookPage } from './pages/BookPage/BookPage' 
import { books } from './constants/books';
import { categories } from './constants/categories';


export const App = () => {
    return <Layout>
        <BooksPage books={books} categories={categories}></BooksPage>
    </Layout>
}