import React from 'react'

const MarsCard = props => {
    return(
        <div className="card">
                        <div className="card-header">
                            <div><h3><strong>ID: </strong> {props.photo.id}</h3>
                            <h3><strong>Earth Date: </strong>{props.photo.earth_date}</h3>
                            </div>
                        </div>
                        <div className="card-body">
                        <div className="row">
                            <div className = "col-md-12 mx-auto">
                                <img src={props.photo.img_src} alt={props.photo.id} width="100%" ></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className = "col-md-6">
                                 <p>{props.rover.name}</p>
                                 <p>{props.rover.landing_date}</p>
                                 <p>{props.rover.launch_date}</p>
                                 <p>{props.rover.status}</p>
                                 <p>{props.rover.total_photos}</p>
                            </div>
                            <div className = "col-md-6"> 
                                {props.cameras}
                            </div>
    
                        </div>
                       
                        </div>
                    </div>  
    )
}
export default MarsCard