import React from 'react'
import axios from 'axios'

export default class MarsPhotoView extends React.Component {
    
    state = {
        photo: {},
        index: this.props.match.params.id,
        loading: true,
        rover: {},
        cameras: []
    }

    componentDidMount(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=gaLtTD8ykaH3XPU4XFtsQKHVtUbJcyawsoCgbVfk").then(
            res => (
                this.setState({
                    photo : res.data.photos[this.state.index],
                    rover: res.data.photos[this.state.index].rover,
                    cameras: res.data.photos[this.state.index].rover.cameras
                })
            )
        )
    }

    render(){
        let cameras = null
        if(this.state.cameras){
            cameras = this.state.cameras.map((camera, index) => {
                return (<div key={index}><p>name: {camera.name}</p><p>full name: {camera.full_name}</p></div>)
               })
        } 
        return (
            <div className="col-md-12 mx-auto">
                                       <div className="card">
                        <div className="card-header">
                            <div><h3><strong>ID: </strong> {this.state.photo.id}</h3>
                            <h3><strong>Earth Date: </strong>{this.state.photo.earth_date}</h3>
                            </div>
                        </div>
                        <div className="card-body">
                        <div className="row">
                            <div className = "col-md-12 mx-auto">
                                <img src={this.state.photo.img_src} alt={this.state.photo.id} width="100%" ></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className = "col-md-6">
                                 <p>{this.state.rover.name}</p>
                                 <p>{this.state.rover.landing_date}</p>
                                 <p>{this.state.rover.launch_date}</p>
                                 <p>{this.state.rover.status}</p>
                                 <p>{this.state.rover.total_photos}</p>
                            </div>
                            <div className = "col-md-6"> 
                                {cameras}
                            </div>
    
                        </div>
                       
                        </div>
                    </div>   
                  
            </div> 
            
            
            
            
            
            
        )
    }   
}
