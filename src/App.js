import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import BaseRouter from './routes'
import Layout from './hoc/Layout/Layout'
export default class App extends React.Component{

  state = {
    api_key : "gaLtTD8ykaH3XPU4XFtsQKHVtUbJcyawsoCgbVfk"
  }

  render(){
    return (
      <BrowserRouter> 
          <Layout>
            <BaseRouter/>
          </Layout>  
      </BrowserRouter>
      
    );
  }
  
  
  
}

