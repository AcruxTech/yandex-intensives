import './Review.css'
import { StarsDisplay } from '../StarsDisplay/StarsDisplay'

 
export const Review = ({ review }) => {
    return <div className='review'>
        <div className='review-info'>
            <span className='review-info__reviewer'>{review.reviewer}</span>
            <StarsDisplay amount={review.stars}></StarsDisplay>
        </div>
        <span className='review__text'>{review.text}</span>
    </div>
}