import React from 'react';
import { render } from 'react-dom';
import MovieCatalogue from './components/MovieCatalogue';
import Form from './components/Form';
import MovieSingle from './components/MovieSingle';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Replace this with your own components
class App extends React.Component {
    constructor() {
        super();
        this.fetchMovies = this.fetchMovies.bind(this);
        this.state = {
            movies: [],
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <h1>Reel</h1>
                        <Route exact path="/catelogue" 
                            render={() => <Form fetchMovies={this.fetchMovies} />  }
                        />                 
                    </header>
                    <Route exact path="/catelogue" 
                        render={ () => <MovieCatalogue fetchMovies={this.fetchMovies}   movies={this.state.movies.reverse()}/> } 
                    />
                    <Route path="/catelogue/:movieId" component={MovieSingle}/>
                </div>
            </Router>
        )
    };
    componentDidMount() {
        this.fetchMovies();
    };

    fetchMovies() {
        fetch("/api/movies")
            .then(res => res.json())
            .then(json => this.setState({ movies: json }))
    };
}

render(<App />, document.getElementById('app'));
