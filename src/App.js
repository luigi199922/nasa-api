import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import BaseRouter from './routes'
import Navbar from './containers/Navbar/Navbar'

export default class App extends React.Component{

  state = {
    api_key : "gaLtTD8ykaH3XPU4XFtsQKHVtUbJcyawsoCgbVfk"
  }

  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <div className="App">
          
          <BaseRouter/>
        </div> 
      </BrowserRouter>
      
    );
  }
  
  
  
}

