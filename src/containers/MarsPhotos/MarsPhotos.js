import React from 'react'
import axios from '../../axios-orders'
import Photo from '../../components/Photo/Photo'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './MarsPhotos.module.css'
import Backdrop from '../../components/Backdrop/Backdrop'
import MarsCard from '../../components/MarsCard/MarsCard'
import {API_KEY} from '../../api-key'
export default class MarsPhotos extends React.Component{
    
   state = {
       photos: [],
       loading: true,
       url: "/mars-photos/api/v1/rovers/curiosity/photos?sol="+ Math.floor(Math.random() * 10) + 1 +"&api_key=" + API_KEY,
       displayModal: false,
       img_src: "",
       photo_display: {
           rover: {
               name: ""
           },
           img_src: ""
       }
    }

   componentDidMount(){
    axios.get(this.state.url).then(
        res => (
            this.setState({
                photos : res.data.photos,
                loading: false,
                photo_display: res.data.photos[0],
            })
        )
    )
   }
   onViewModal = (photo) =>{
       console.log(photo)
    this.setState({displayModal: true, photo_display: photo})
    }
    onRemoveModal = () =>{
        this.setState({displayModal: false})
    }

    render(){
        let photos  = null
        if (!this.state.loading){
            photos = this.state.photos.map((photo, index) => {
            return(<Photo key={photo.id}
                          cameras={photo.cameras}
                          photo={photo}
                          id={photo.id}
                          viewModal={() => this.onViewModal(photo)}
                          removeModal={this.onRemoveModal}
                          />)
            })
        }   

        return (  
            <div>
                {this.state.loading ? <Spinner/> : null}
                <div className={classes.GridContainer}>
                    {photos}
                    
                </div>
                
                 {this.state.displayModal ? <MarsCard show={this.state.displayModal} closed={this.onRemoveModal}/> : null}
                 {this.state.displayModal ? <Backdrop show={this.state.displayModal} /> : null}
            </div> 
        )
    }
}
