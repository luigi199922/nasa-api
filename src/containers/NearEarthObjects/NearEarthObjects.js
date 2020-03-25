import React from 'react'
import axios from 'axios'
import * as keys from '../../api-key'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './NearEarthObjects.module.css'
import NearEarthObjectsCard from '../../components/NearEarthObjectsCard/NearEarthObjectsCard'

class NearEarthObjects extends React.Component {
    state = {
        url: "http://www.neowsapp.com/rest/v1/feed?start_date=2020-01-16&end_date=2020-01-16&detailed=false&api_key=" + keys.API_KEY,
        links: {},
        NearEarthObjects: [],
        date: "2020-01-16",
        loading: true
    }
    componentDidMount(){
        axios.get(this.state.url).then((res)=>{
            this.setState({
                links: res.data.links,
                NearEarthObjects: res.data.near_earth_objects[this.state.date],
                loading: false
            })
        })
    }
    onClickHandler(key){
        console.log("Button Clicked" + key)
        const newNearEarthObjects = this.state.NearEarthObjects
        newNearEarthObjects.splice(key, 1);
        const newState = {
            ...this.state,
            NearEarthObjects: newNearEarthObjects
        }
        this.setState(newState)
    }
    render(){
        let content = <Spinner />
        if(!this.state.loading){

            content = (
                this.state.NearEarthObjects.map((obj,key) => {
                    return (   
                            <NearEarthObjectsCard
                                object={obj}
                                key={obj.id}
                                diameter={obj.estimated_diameter}
                                clicked={() => this.onClickHandler(key)}
                                />
                                )
                })
            )
        
        }
        console.log(this.state.NearEarthObjects)
        return(
            <div className={classes.Content}>
                {this.state.loading ? null : <h3>{"Near Earth Objects: " + this.state.NearEarthObjects.length + " as of " + this.state.date}</h3>}
                <div className={classes.Grid}>
                {content}
                </div>
            </div>
        )
    }
}
export default NearEarthObjects