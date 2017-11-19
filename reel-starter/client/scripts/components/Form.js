import React from 'react';
import ReactFilestack from 'filestack-react';


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            director: '',
            year: '',
            plot: '',
            posterUrl: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUploadSuccess = this.onUploadSuccess.bind(this);
    }
    handleChange(e) {
       this.setState({
            [e.target.name]: e.target.value, 
       });
    }
    onUploadSuccess(success) {
        const url = success.filesUploaded[0].url;
        this.setState({
            posterUrl: url,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const movie = Object.assign({}, this.state);
        fetch("/api/movies", {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then(() => this.props.fetchMovies());
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <input onChange={this.handleChange} name="title" type="text" placeholder="Enter movie name" value={this.state.title} />
                    <ReactFilestack
                      apikey={"AwT9gpp4PQvqDYZ9Vm6Voz"}
                      buttonText="Upload Poster"
                      onSuccess={this.onUploadSuccess}
                    />
                    <input onChange={this.handleChange} name="year" type="number" placeholder="Enter movie year" value={this.state.year }/>
                    <input onChange={this.handleChange} name="director" type="text" placeholder="Enter movie director" value={this.state.director} />                
                </div>
                <div className="form-row">
                    <textarea onChange={this.handleChange} name="plot" type="text" placeholder="Enter movie plot" value={this.state.plot} />                
                </div>
                <div className="form-row">
                    <button>Add Movie</button>
                </div>                
            </form>
        );
    }
}

export default Form;