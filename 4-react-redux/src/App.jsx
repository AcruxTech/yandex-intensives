import { Layout } from './components/Layout/Layout';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookPage } from './pages/BookPage/BookPage' 
import { books } from './constants/books';
import { categories } from './constants/categories';

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from './pages/CartPage/CartPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'


export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<BooksPage categories={categories}></BooksPage>} />
                        <Route path='book/:bookId' element={<BookPage></BookPage>} />
                        <Route path='cart' element={<CartPage books={books}></CartPage>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}