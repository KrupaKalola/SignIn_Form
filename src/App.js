import React, { Component } from 'react'
import User from './User'
import Dashboard from './Dashboard'

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
            return <Dashboard submitForm={this.clickLogout}/>
        }
        else{
            return <User submitForm={this.clickLogin}/>
        }
    }
}