import { useState } from 'react';
import './Genres.css'


export const Genres = ({ books }) => {
    let categories = []
    books.forEach(function(item) { categories.push(item.category) });
    categories = Array.from(new Set(categories))

    const [active, setActive] = useState(categories[0])

    return <div className='genres'>
        <ul>
            {
                categories.map((category, i) => <li key={i} onClick={() => setActive(category) }>{category}</li>)
            }
        </ul>
    </div>
}
