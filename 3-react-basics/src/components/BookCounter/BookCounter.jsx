import './BookCounter.css';
import { useState } from 'react';


export const BookCounter = () => {
    const [count, setCount] = useState(0);

    return <div className='book-counter'>
        <button className='book-counter__minus' onClick={() => setCount(count - 1)} disabled={count === 0}> - </button>
        <div className='book-counter__count'> {count} </div>
        <button className='book-counter__plus' onClick={() => setCount(count + 1)}> + </button>
    </div>
};