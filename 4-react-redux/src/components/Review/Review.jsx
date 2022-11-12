import './Review.css'
import { StarsDisplay } from '../StarsDisplay/StarsDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/user/selectors'
import { useEffect } from 'react'
import { loadUsersIfNotExist } from '../../store/user/loadUsersIfNotExist'

 
export const Review = ({ review }) => {
    const dispatch = useDispatch()  
    let users = useSelector(state => selectUsers(state))

    useEffect(() => {
        dispatch(loadUsersIfNotExist);
    }, []);

    if (users.length === 0) {
        return <span>Loading...</span>
    }

    let reviewer;
    users.forEach(user => {
        if (user.id == review.userId) {
           reviewer = user
        } 
    });

    return <div className='review'>
        <div className='review-info'>
            <span className='review-info__reviewer'>{reviewer.name}</span>
            <StarsDisplay amount={review.rating}></StarsDisplay>
        </div>
        <span className='review__text'>{review.text}</span>
    </div>
}