import React from 'react'
import axios from 'axios'
import Photo from '../../components/Photo/Photo'

export default class MarsPhotos extends React.Component{
   state = {
       photos: [],
       loading: true,
   }
   photoSelectionHandler(id){
    this.props.history.push({pathname: '/mars-photo/' + id})
   }
   componentDidMount(){
    axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=gaLtTD8ykaH3XPU4XFtsQKHVtUbJcyawsoCgbVfk").then(
        res => (
            this.setState({
                photos : res.data.photos
            })
        )
    )
   }
    render(){
        let photos  = null
        if (this.state.photos){
            photos = this.state.photos.map((photo, index) => {
            return(<Photo key={photo.id} clicked={() => this.photoSelectionHandler(index)} photo={photo} onLoad={()=>this.setState({loading: false})}/>)
        })
    }
        return (
            
        <div className="row">
            {photos}
            {this.state.loading ? ( <div className="text-center"><p>Loading...</p></div>): null}
        </div>
        )
    }
}
