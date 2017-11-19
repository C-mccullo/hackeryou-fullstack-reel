import React from 'react';
import ReactFilestack from 'filestack-react';
import { Link } from 'react-router-dom';

class Movie extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false,
        }
        this.editToggle = this.editToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onUploadSuccess = this.onUploadSuccess.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
    }
    handleChange(e) {
        this.setState({
           [e.target.name]: e.target.value, 
        });
    };

    deleteMovie(id) {
        fetch(`/api/movies/${id}`, { 
            method: "DELETE",
        })
        .then(() => this.props.fetchMovies());
    };

    onUploadSuccess(success) {
        const url = success.filesUploaded[0].url;
        this.setState({
            posterUrl: url,
        });
    }
    editToggle() {
        this.setState({
            editing: !this.state.editing,
        });
    }
    saveMovie(id) {
        const movie = Object.assign({}, this.state);
        delete movie.editing;
        fetch(`/api/movies/${id}`, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body:JSON.stringify(movie),
        })
        .then(() => {
            this.props.fetchMovies();
        })
        this.setState({ editing: false })
    }
    componentDidMount() {
        const newState = Object.assign({}, this.props, this.state);
        this.setState(newState);
    }
    render() {
        return (
            <div className="movie" style={{backgroundImage: `url(${this.props.posterUrl})`}}>
                <Link to={`/catelogue/${this.props._id}`}>
                    {this.state.editing ?
                        <div className="movie-editing">
                            <fieldset>
                                <label htmlFor="title">Title: </label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={this.state.title}
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="title">Year: </label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    id="year"
                                    name="year"
                                    value={this.state.year}
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="poster">Poster: </label>
                                <ReactFilestack
                                    apikey={"AwT9gpp4PQvqDYZ9Vm6Voz"}
                                    buttonText="Upload Photo"
                                    buttonClass="classname"
                                    onSuccess={this.onUploadSuccess}
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="poster">Director: </label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    id="director"
                                    name="director"
                                    value={this.state.director}
                                />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="plot">Plot: </label>
                                <textarea
                                    onChange={this.handleChange}
                                    name="plot"
                                    id="plot"
                                    value={this.state.plot}
                                />
                            </fieldset>
                            <button onClick={() => this.saveMovie(this.props._id)}>Save Changes</button>
                        </div>
                        :
                        <div className="movie-summary">
                            <button className="movie-delete" onClick={() => this.deleteMovie(this.props._id)}>x</button>
                            <button className="movie-edit" onClick={this.editToggle}>Edit</button>
                            <h2>{this.props.title} ({this.props.year})</h2>
                            <p>Director: {this.props.director}</p>
                            <p>Plot: {this.props.plot}</p>
                        </div>
                    }
                </Link>
            </div>
        );
    }
}

export default Movie;