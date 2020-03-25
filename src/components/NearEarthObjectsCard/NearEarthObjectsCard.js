import React from 'react'
import classes from './NearEarthObjectsCardCard.module.css'
import Button from '../../components/UI/Button/Button'

const NearEarthObjectsCard = props => {
    return (
        <div className={classes.Card}>
            <h2>{props.object.name}</h2>
            <p>Diameter Minimum : {props.diameter.kilometers.estimated_diameter_min}</p>
            <p>Diameter Maximum: {props.diameter.kilometers.estimated_diameter_max}</p>
            <a href={props.object.nasa_jpl_url}>Learn More</a>
            <Button className="Danger" clicked={props.clicked}>Remove</Button>
        </div>
    )
}
export default NearEarthObjectsCard