import React from 'react'
import classes from './Card.module.css'
const Card = props => {
    return (
        <div className={classes.Card}>
            <h1>Picture of the Day</h1>
            <h3>{props.title}</h3>
            <p>{props.explanation}</p>
            <img src={props.url} alt="Nasa API "></img>
        </div>
    )
}
export default Card