import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    

    handleFetch = () => {
        fetch(URL)
            .then(r => r.json())
            .then(reviews => {
                this.setState({reviews: reviews.results})})
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleFetch}>
                    <MovieReviews reviews={this.state.reviews}/>
                </form>
            </div>
        )
    }
}