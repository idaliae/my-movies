import React, {Component} from "react";
import '../css/Collections.css';
import Movies from './Movies';

class Collections extends Component {
    constructor() {
        super();

        this.state = {
            movies: []
        }
    }

    addMovie = () => {
        let movies = this.state.movies;
        movies.push(
            {
                id: Date.now(),
                title: "Movie Title",
                description: "Movie synopsis",
                year: "Year released",
                genre: "Movie genre"
            }
        );
        this.setState(
            {
                movies
            }
        );
    }

    // deleteMovie = (id) => {
    //     let newMovieArr = this.state.movies;
    //     newMovieArr.map((movie.id) => {
    //         if (id === movie.id) {
    //             newMovieArr.splice(index, 1);
    //         }
    //     });
    // }

    render() {
        return (
            <div>
                <div className="div-collections">
                    <div className="row">
                        <p>"States will go here"</p>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-success">Add Movie</button>
                </div>
                <div>
                <button type="button" class="btn btn-danger">Delete Movie</button>
                </div>
            </div>
            
        )
    }
}

export default Collections;