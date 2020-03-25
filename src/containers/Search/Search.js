import React from 'react'
import axios from 'axios'
import Input from '../../components/UI/Input/Input'

class Search extends React.Component{
    state  = {
        url: "https://images-api.nasa.gov/search?keywords=MOON",
        results: {},
        Form: {
            search: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Search Key a Word'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        }

    }
    componentDidMount(){
        axios.get(this.state.url).then(res => {
            this.setState({
                results: res.data.collection
            })
        })
    }
    searchHandler(event){
        event.preventDefault()

    }
    render(){
        const formElementsArray= []
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form =(
            <form onSubmit={this.searchHandler}>
                {formElementsArray.map((formElement, key) => {
                    return <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            value={formElement.config.value} 
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                            />
                })}
            </form>
        )
        return(
            <div>
                Search Container
            </div>
        )
    }
}
export default Search