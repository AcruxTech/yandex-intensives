import './BooksPage.css'
import { Books } from '../../components/Books/Books' 
import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../store/book/selectors";
import { useEffect, useState } from 'react';
import { loadBooksIfNotExist } from '../../store/book/loadBooksIfNotExist';

 
export const BooksPage = ({ categories }) => {
    const [active, setActive] = useState(categories[0])

    const dispatch = useDispatch();
    const books = useSelector((state) => selectBooks(state));
  
    useEffect(() => {
        dispatch(loadBooksIfNotExist);
    }, []);

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
                            onClick={() => setActive(category) } > {category}
                        </li>
                    )
                }
            </ul>
        </div>
        <Books books={books} active={active}></Books>
    </div>
}