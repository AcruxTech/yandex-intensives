import './BooksPage.css'
import { Books } from '../../components/Books/Books' 
import { useDispatch, useSelector } from "react-redux";
import { selectBooksByCategory } from "../../store/book/selectors";
import { useEffect, useState } from 'react';
import { loadBooksIfNotExist } from '../../store/book/loadBooksIfNotExist';

 
export const BooksPage = ({ categories }) => {
    const [active, setActive] = useState(categories[0])

    const dispatch = useDispatch();
    let books_by_categories = useSelector(state => selectBooksByCategory(state, active));
    
    useEffect(() => {
        dispatch(loadBooksIfNotExist);
    }, []);

    books_by_categories = books_by_categories.map(book => book.id)

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
            books_by_categories.length !== 0 ? 
            (<Books bookIds={books_by_categories}></Books>) :  
            (<span style={{width: '70%'}}>Loading...</span>)
        }
    </div>
}