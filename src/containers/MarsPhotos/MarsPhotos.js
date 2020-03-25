import React from 'react'
import axios from '../../axios-orders'
import Photo from '../../components/Photo/Photo'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './MarsPhotos.module.css'

export default class MarsPhotos extends React.Component{
    
   state = {
       photos: [],
       loading: true,
       url: "/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=gaLtTD8ykaH3XPU4XFtsQKHVtUbJcyawsoCgbVfk"
   }

   photoSelectionHandler(id){
    this.props.history.push({pathname: '/mars-photo/' + id})
   }

   componentDidMount(){
    axios.get(this.state.url).then(
        res => (
            this.setState({
                photos : res.data.photos,
                loading: false,
            })
        )
    )
   }

    render(){
        let photos  = <Spinner />
        console.log(this.state.photos)
        if (!this.state.loading){
            photos = this.state.photos.map((photo, index) => {
                console.log(photo)
            return(<Photo key={photo.id}
                          cameras={photo.cameras}
                          clicked={() => this.photoSelectionHandler(index)} 
                          photo={photo}
                          id={photo.id}/>)
            })
        }   

        return (      
            <div className={classes.GridContainer}>
                {photos}
            </div>
        )
    }
}
