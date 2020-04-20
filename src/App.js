import React, { Component } from 'react'
import User from './User'
import Nav from './Nav'
export default class App extends Component {
    state={
        loggedIn:false
    }
    clickLogin=()=>{
        this.setState({loggedIn:true})
        
    }
    clickLogout=()=>{
        this.setState({loggedIn:false})
        
    }

    render() {
        const loggedIn = this.state.loggedIn
        if(loggedIn){
            return <Nav submitForm={this.clickLogout}/>
        }
        else{
            return <User submitForm={this.clickLogin}/>
        }
    }
}