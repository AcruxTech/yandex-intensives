import './BooksPage.css'
import { Books } from '../../components/Books/Books' 
import { useDispatch, useSelector } from "react-redux";
import { selectBooksByCategory } from "../../store/book/selectors";
import { useEffect, useState } from 'react';
import { loadBooksIfNotExist } from '../../store/book/loadBooksIfNotExist';
import { selectCategories } from '../../store/category/selectors';
import { loadCategoriesIfNotExist } from '../../store/category/loadCategoriesIfNotExist';

 
export const BooksPage = () => {
    const dispatch = useDispatch();

    let categories = useSelector(state => selectCategories(state))
    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
    }, []);
    console.log(categories)
    const [active, setActive] = useState(categories[0])

    let booksByCategories = useSelector(state => selectBooksByCategory(state, active));
    useEffect(() => {
        dispatch(loadBooksIfNotExist);
    }, []);

    booksByCategories = booksByCategories.map(book => book.id)

    return <div className='books-page'>
        <div className='categories'>
            <ul className='categories-list'>
                {
                    categories.map((category, i) => 
                        <li 
                            key={i}  
                            className={ 
                                ( category === active ? 
                                    'categories-list__item categories-list__item_selected' : 'categories-list__item' 
                                )} 
                            onClick={() => setActive(category) }
                        > 
                            {category}
                        </li>
                    )
                }
            </ul>
        </div>
        {
            booksByCategories.length !== 0 ? 
            (<Books bookIds={booksByCategories}></Books>) :  
            (<span style={{width: '70%'}}>Loading...</span>)
        }
    </div>
}