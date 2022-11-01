import './BooksPage.css'
import { Books } from '../../components/Books/Books' 
import { useState } from 'react'

 
export const BooksPage = ({ books, categories }) => {
    const [active, setActive] = useState(categories[0])

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