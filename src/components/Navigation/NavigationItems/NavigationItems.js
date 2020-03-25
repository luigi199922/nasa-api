import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">NASA API REACT</NavigationItem>
        <NavigationItem link="/mars-photo">Mars Gallery</NavigationItem>
        <NavigationItem link="/near-earth-objects">Near Earth Objects</NavigationItem>
    </ul>
)
export default NavigationItems