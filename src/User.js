import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser ,faUnlock} from '@fortawesome/free-solid-svg-icons';
import './User.css'

export default class User extends Component {
    state={
        username: '',
        password: '',
        type: "password",
        icon: faLock,
        
    }
    toggleVisibility=()=>{
        if(this.state.type==="password"){
            this.setState({type:"text", icon:faUnlock})

        }else{
            this.setState({type:"password", icon:faLock})
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submit=(e)=>{
       
        if(this.state.username!=='' && this.state.password!==''){
            const username = this.state.username
            console.log(username)
            localStorage.setItem('username', username)
            return this.props.submitForm
        }
    }
    render() {
       
        const center = {
            textAlign: "center",
            color: "#fff",
            fontSize: "25px"
        }
        const pos = {
            position: "relative"
        }
        return (
            <div className="mainBg">
                <img src={process.env.PUBLIC_URL + '/nividata_white-1.png'} alt='logo' style={{width:'165px', marginTop:'20px', marginLeft: '40px'}}/>
                <div className="formContainer">
                    <form onSubmit={this.submit(this.props.submitForm)}>
                        <h3 style={center}>Sign In</h3>
                        {/* <label className="formLabel">User Id</label><br></br> */}
                        <div style={pos}>
                            <span className="icon">
                            <FontAwesomeIcon icon={faUser} className="icon-user"/>
                            </span>
                            <input className="inputField paddingLeft" type="text" name='username' value={this.state.username} placeholder="Username" autoComplete="off" onChange={this.handleChange}></input>
                        </div>
                        <br />
                        {/* <label className="formLabel">Password</label><br></br> */}
                       <div style={pos}>
                       <span className="icon1">
                                <FontAwesomeIcon icon={this.state.icon} className="icon-user" onClick={this.toggleVisibility}/>
                            </span>
                        <input className="inputField" type={this.state.type} name='password' value={this.state.password} placeholder="Password" onChange={this.handleChange}></input>
                       </div>
                        <br />
                        <input className="btn" type="submit" value="Login"></input>
                    </form>
                    <p className="register">New User?<a href="./user">  Register</a></p>
                </div>
            </div>
        )
    }
}
