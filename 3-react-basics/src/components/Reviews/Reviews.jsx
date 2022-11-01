import './Reviews.css'
import { Review } from '../Review/Review'

 
export const Reviews = ({ reviews }) => {
    return <div className='reviews'>
        {
            reviews.map((review, i) => <Review review={review} key={i}></Review>)
        }
    </div>
}