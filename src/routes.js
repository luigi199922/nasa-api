import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dayphoto from './containers/DayPhoto/Dayphoto';
import MarsPhoto from './containers/MarsPhotos/MarsPhotos'
import Photo from './components/Photo/Photo'
import NearEarthObjects from './containers/NearEarthObjects/NearEarthObjects'

const BaseRouter = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dayphoto} />
            <Route exact path="/mars-photo" component={MarsPhoto}/>
            <Route exact path={"/mars-photo/:id"} component={Photo}/> 
            <Route exact path={"/near-earth-objects"} component={NearEarthObjects}/> 

        </Switch>
    )
}
export default BaseRouter