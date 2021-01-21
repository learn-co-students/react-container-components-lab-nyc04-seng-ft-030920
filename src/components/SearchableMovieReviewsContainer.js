import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch(URL)
        .then(r => r.json())
        .then(reviews => this.setState({ reviews: reviews.results }))
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(r => r.json())
        .then(reviews => this.setState({ reviews: reviews.results }))
    }

    render() { 
        return ( 
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search-input'>Search Movie Reviews</label>
                    <input 
                    type='text'
                    id='seach-input'
                    style={{width: 300}}
                    onChange={this.handleChange}
                    ></input>
                    <button type='submit'>Submit</button>
                </form>
                {<MovieReviews reviews={this.state.reviews}/>}
            </div>
         );
    }
}
 
export default SearchableMovieReviewsContainer;