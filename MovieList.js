import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies :[
                { "id": 1, "name": "Bahubali 2", "year": 2017, "image_url": "http://bsmedia.business-standard.com/_media/bs/img/article/2017-04/28/full/1493318968-5445.jpg", "production_house": "ABC Movies", "rating": 5, "type": "Epic", "language": "Telugu", "date": "2017-09-30" },
                 { "id": 2, "name": "Captain Marvel", "year": 2019, "image_url": "https://www.thewrap.com/wp-content/uploads/2018/12/Captain-Marvel-Second-Poster-Crop.jpg", "production_house": "Marvel Studios", "rating": 5, "type": "Sci-Fi", "language": "English", "date": "2019-03-22" },
                 { "id": 1, "name": "Avengers", "year": 2017, "image_url": "http://bsmedia.business-standard.com/_media/bs/img/article/2017-04/28/full/1493318968-5445.jpg", "production_house": "ABC Movies", "rating": 5, "type": "Epic", "language": "Telugu", "date": "2017-09-30" },]
        }

    }
    componentWillUnmount(){
        console.log("I am Movies Unmounted");
    }
    
    render() {
        let listOfMoviesDisplayed = '';
        if(this.props.search === ''){
            listOfMoviesDisplayed = this.state.movies.map((movie, index) => {
                return <MovieDetails key={index} details={movie} />
            })
        }
        else{
            let filterMovies = this.state.movies.filter((movie,index) =>{
                return movie.name.includes(this.props.search)
            });
            listOfMoviesDisplayed = filterMovies.map((movie, index) => {
                return <MovieDetails key={index} details={movie} />
        })
    }
        return (
            <div>
                {listOfMoviesDisplayed}
            </div>

        )
    }
}