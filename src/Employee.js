import {
    CardBody,
    Card,
    Row,
    Col
} from 'reactstrap';
import axios from 'axios'
import './Employee.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
            nameInitials: [],
            search:"",
            displayData: []
        };
    }

    handleSearch(value) {
        this.setState({
            search:value
        })
        this.displaySearchResult(value);
    }


    getUsersData() {

        axios
            .get('./employee_database.json')
            .then(res => {
                const data = res.data
            
                this.setState({
                    Users: data,
                    displayData: data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.getUsersData()
    }

    displaySearchResult(searchTerm) {
        let searchResults = this.state.Users;
        const resultedData = searchResults.filter((user) => {
            if (user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
               return (user);
            }
        });
        this.setState({
            displayData: resultedData
            
        });
        console.log(this.state.displayData)
    }


    render() {
        return (
            <div>
                <Card className='top-bar'>
                    <CardBody>
                        <div className='d-flex justify-content-between'>
                            <h5>Employee directory</h5>
                            <span>
                                <input type='text' name='search' className='search' value={this.state.search} onChange={e => this.handleSearch(e.target.value)} ></input>
                                <span>
                                    <FontAwesomeIcon icon={faSearch} className='search-icon'></FontAwesomeIcon>
                                </span>
                            </span>
                        </div>
                    </CardBody>
                </Card>
                <Card className='employee-directory'>
                    <CardBody>
                        <Row className='justufy-content-between'>
                            {this.state.displayData.map((person , i)=>

                                < Col lg='3' key={person.id} >
                                    <div className='employee-detail text-center '>

                                        <CardBody className='text-center'>
                                            {person.url ? <img src={process.env.PUBLIC_URL + person.url} alt={person.name} className='rounded-circle img-fluid'></img> : <p className='initials rounded-circle'><b>{person.initial}</b></p>}
                                            <p className='my-1'>{person.name}</p>
                                            <p className='mb-0' style={{ fontSize: 14 }}>{person.jobTitle}</p>
                                        </CardBody>

                                    </div>
                                </Col >
                            )}
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
