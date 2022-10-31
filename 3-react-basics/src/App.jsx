import { Layout } from './components/Layout/Layout';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookPage } from './pages/BookPage/BookPage' 
import { books } from './constants/mock';


export const App = () => {
    return <Layout>
        <BooksPage books={books}></BooksPage>
    </Layout>
}