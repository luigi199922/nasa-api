import React from 'react';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner'
import Card from '../../components/Card/Card'
import Button from '../../components/UI/Button/Button'
import * as keys from '../../api-key'
import Modal from '../../components/Modal/Modal'
import Backdrop from '../../components/Backdrop/Backdrop'

export default class Dayphoto extends React.Component {
    state = {
        copyright: "",
        date: "",
        explanation: "",
        url: "",
        title: "",
        loading: true,
        displayModal: false,
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
    onViewModal = () =>{
        this.setState({displayModal: true})
    }
    onRemoveModal = () =>{
        this.setState({displayModal: false})
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
                <Button btnType="Info" clicked={this.onViewModal}>View Photo</Button>
                <Modal 
                    title={this.state.title}
                    show={this.state.displayModal} 
                    closed={this.onRemoveModal} 
                    url={this.state.url}
                    alt={this.state.url} />
                {this.state.displayModal ? <Backdrop show={this.state.displayModal} /> : null}
            </div>
        );
    }
}