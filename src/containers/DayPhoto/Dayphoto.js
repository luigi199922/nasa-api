import React from 'react';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner'
import Card from '../../components/Card/Card'
import * as keys from '../../api-key'

export default class Dayphoto extends React.Component {
    state = {
        copyright: "",
        date: "",
        explanation: "",
        url: "",
        title: "",
        loading: true,

    }
    componentDidMount(){
        axios.get("https://api.nasa.gov/planetary/apod?api_key=" + keys.API_KEY).then(
            res => (
                this.setState({
                    copyright: res.data.copyright,
                    title: res.data.title,
                    explanation: res.data.explanation,
                    url: res.data.url,
                    date: res.data.date,
                    loading: false,

                })
            )
        )
    }
    render(){
        let content = <Spinner/>
        if(!this.state.loading){
            content = <Card 
                        title={this.state.title}
                        explanation={this.state.explanation}
                        url={this.state.url}
                            />     
        }

        return(
            <div className="text-center">
                {content}         
            </div>
        );
    }
}