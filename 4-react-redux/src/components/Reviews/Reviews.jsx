import './Reviews.css'
import { Review } from '../Review/Review'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectReviews } from '../../store/review/selectors';
import { loadReviewsIfNotExist } from '../../store/review/loadReviewsIfNotExist';

 
export const Reviews = ({ reviewIds }) => {
    const dispatch = useDispatch();
    let reviews = useSelector(state => selectReviews(state));
    
    useEffect(() => {
        dispatch(loadReviewsIfNotExist);
    }, []);

    if (reviews.length === 0) {
        return <span>Loading...</span>
    }

    return <div className='reviews'>
        {
            reviews.map((review, i) => <Review review={review} key={i}></Review>)
        }
    </div>
}