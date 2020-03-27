import React from 'react'
import axios from 'axios'
import * as keys from '../../api-key'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './NearEarthObjects.module.css'
import NearEarthObjectsCard from '../../components/NearEarthObjectsCard/NearEarthObjectsCard'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { updateObject , checkValidity, getCurrentDate} from '../../shared/utility'

class NearEarthObjects extends React.Component {
    state = {
        url: "http://www.neowsapp.com/rest/v1/feed?start_date=2020-03-22&detailed=false&api_key=" + keys.API_KEY,
        links: {},
        NearEarthObjects: [],
        date: "2020-01-16",
        today: getCurrentDate(),
        loading: true,
        formIsValid: true,
        dateForm: {
            date: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '2020-01-16', displayValue: '2020-01-16'},
                        {value: '2020-01-17', displayValue: '2020-01-17'}
                    ]
                },
                value: '2020-01-16',
                validation: {
                    required: true
                },

               
            },
        }
    }
    componentDidMount(){
        axios.get(this.state.url).then((res)=>{
            this.setState({
                links: res.data.links,
                NearEarthObjects: res.data.near_earth_objects["2020-03-22"],
                loading: false
            })
            console.log(this.state)
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
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement =  updateObject(this.state.dateForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.dateForm[inputIdentifier].validation),
            touched: true
        })
        const updateddateForm = updateObject(this.state.dateForm, {
            [inputIdentifier] : updatedFormElement
        })
        let formIsValid = true
        for(let inputIdentifier in updateddateForm){
            if(updateddateForm[inputIdentifier].valid === false){
                formIsValid = false;
            }
        }
        console.log(updateddateForm)
        this.setState({dateForm: updateddateForm, formIsValid: formIsValid})
        
    }

    submitHandler = () => {
        this.setState({date: this.state.dateForm.date.value})
        console.log(this.state.date)
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
        const formElementsArray= []
        for(let key in this.state.dateForm){
            formElementsArray.push({
                id: key,
                config: this.state.dateForm[key]
            })
        }
        
        let form = formElementsArray.map((formElement, key) => {
            return <form onSubmit={this.submitHandler}>
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            value={formElement.config.value} 
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                            <Button btnType="Success" disabled={!this.state.formIsValid}>Submit</Button>
                    </form>
        })
        
        return(
            <div className={classes.Content}>
                {this.state.loading || !this.state.NearEarthObjects ? null : <h3>{"Near Earth Objects: " + this.state.NearEarthObjects.length }</h3>}
                <br/>
                <h4>{" As of " + this.state.today}</h4>
                {form}
                <div className={classes.Grid}>
                {content}
                </div>
            </div>
        )
    }
}
export default NearEarthObjects