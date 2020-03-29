import React from 'react'
import classes from './Photo.module.css'


const Photo = props =>{
    return (
            <div className = {classes.Photo} onClick={props.clicked}>
                <div>
                    <div>
                        <p>Earth date: <strong>{props.photo.earth_date}</strong></p>
                        <p>id: {props.id}</p>
                        <img onClick={props.viewModal} src={props.photo.img_src} alt='Mars as seen from' width="250px" height="220px"></img>
                        <p>Taken by: {props.photo.rover.name}</p>
                    </div>
                </div>
            </div>    

    )
}
export default Photo