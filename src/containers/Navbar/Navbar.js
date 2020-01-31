import React from 'react';

export default class Navbar extends React.Component{
    state = {
        title: "NASA - API",
    }
    render(){
        return(
        <nav className="Navbar navbar navbar-expand-md navbar-dark bg-dark container-fluid">
    <h1 className="navbar-brand col-sm-3 mr-0 align-items-center">{this.state.title}</h1>
        </nav>
        )
    }
}