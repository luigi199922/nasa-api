import React from 'react';
import axios from 'axios';

export default class Dayphoto extends React.Component {
    state = {
        copyright: "",
        date: "",
        explanation: "",
        url: "",
        title: "",

    }
    componentDidMount(){
        axios.get("https://api.nasa.gov/planetary/apod?api_key=gaLtTD8ykaH3XPU4XFtsQKHVtUbJcyawsoCgbVfk").then(
            res => (
                this.setState({
                    copyright: res.data.copyright,
                    title: res.data.title,
                    explanation: res.data.explanation,
                    url: res.data.url,
                    date: res.data.date,

                })
            )
        )
    }
    render(){
        return(
            <div className="text-center">
                <h1>Picture of the Day</h1>
                <h3>{this.state.title}</h3>
                <p>{this.state.explanation}</p>
                <img src={this.state.url} alt="Nasa API " style={{"width": "500px"}}></img>

                
            </div>
        );
    }
}