import React from 'react'

const Photo = props =>{
    return (
       
            <div className = "col-md-4" onClick={props.clicked}>
                <div className = "card bg-light">
                    <div className = "card-body mx-auto">
                        <p>Earth date: <strong>{props.photo.earth_date}</strong></p>
                        <p>id: {props.photo.id}</p>
                        <img src={props.photo.img_src} alt='Mars as seen from' width="250px" height="220px"></img>
                        <p>Taken by: {props.photo.rover.name}</p>
                    </div>
                </div>
            </div>
           
        
    )
}
export default Photo