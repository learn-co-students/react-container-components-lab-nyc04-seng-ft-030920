import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+ `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {    

    state = {
        reviews: []
    }

    handleFetch = () => {
        fetch(URL)
            .then(r => r.json())
            .then(reviews => {
                this.setState({reviews: reviews.results})})
    }

    componentDidMount() {
        this.handleFetch()
    }

    render() {
        // console.log(this.state.reviews)
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

