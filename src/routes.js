import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dayphoto from './containers/DayPhoto/Dayphoto';
import MarsPhoto from './containers/MarsPhotos/MarsPhotos'
import MarsPhotoView from './components/MarsPhotoView/MarsPhotoView'

const BaseRouter = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Dayphoto} />
            <Route exact path="/mars-photo" component={MarsPhoto}/>
            <Route exact path={"/mars-photo/:id"} component={MarsPhotoView}/> 

        </Switch>
    )
}
export default BaseRouter