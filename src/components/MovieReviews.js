import React from 'react';

const MovieReviews = (props) => {
    return (  
        <div className='review-list'>
            {props.reviews.map((review, index) => 
            <div className='review' key={index}>
                {review.headline}
            </div>)}
        </div>
    );
}
 
export default MovieReviews;