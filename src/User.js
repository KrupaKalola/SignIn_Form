import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser} from '@fortawesome/free-solid-svg-icons';

import './User.css'

export default class User extends Component {
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
                <div className="formContainer">
                    <form>
                        <h3 style={center}>Sign In</h3>
                        {/* <label className="formLabel">User Id</label><br></br> */}
                        <div style={pos}>
                            <span className="icon">
                            <FontAwesomeIcon icon={faUser} className="icon-user"/>
                            </span>
                            <input className="inputField paddingLeft" type="text" placeholder="Username" autoComplete="off"></input>
                        </div>
                        <br />
                        {/* <label className="formLabel">Password</label><br></br> */}
                       <div style={pos}>
                       <span className="icon1">
                                <FontAwesomeIcon icon={faLock} className="icon-user" />
                            </span>
                        <input className="inputField" type="password" placeholder="Password"></input>
                       </div>
                        <br />
                        <input className="btn" type="submit" value="Login"></input>
                    </form>
                    <p style={{paddingLeft: 50 , color: "#fff"}}>New User?<a>Register here</a></p>
                </div>
            </div>
        )
    }
}
