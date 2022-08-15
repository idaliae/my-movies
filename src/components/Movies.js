import React, {Component} from "react";
import '../css/Movies.css';
// import PropTypes from 'prop=types';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.titleContent = React.createRef();
        this.descriptionContent = React.createRef();
        this.yearContent = React.createRef();
        this.genreContent = React.createRef();
        this.state = {
            title: this.props.title,
            description: this.props.description,
            year: this.props.year,
            genre: this.props.genre
            // editMode: false
        }
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        });
    }

    render() {
        return <h1>Movies, {this.props.name}</h1>;
    }
}

export default Movies;