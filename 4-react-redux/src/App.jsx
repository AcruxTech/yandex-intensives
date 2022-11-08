import { Layout } from './components/Layout/Layout';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookPage } from './pages/BookPage/BookPage' 
import { books } from './constants/books';
import { categories } from './constants/categories';

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export const App = () => {
    return (
        <Provider store={store}>
            <Layout>
                <BooksPage books={books} categories={categories}></BooksPage>
                {/* <BookPage book={books[0]}></BookPage> */}
            </Layout>
        </Provider>
    )
}