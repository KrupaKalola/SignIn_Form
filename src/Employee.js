import React from 'react'
import {
    CardBody,
    Card,
    Row,
    Col
} from 'reactstrap';
import data from './employee_database.json'

import './Employee.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Employee = (props) => {
   

   // -------initial of name ----------
    const newData = data.map((data , i) => {
        let [firstname, lastname] = data.name.split(" ")
        firstname=firstname.slice(0,1)
        lastname=lastname.slice(0,1)
        let initial = firstname+lastname 
        
        return (
            <Col lg='3' key={data.id}>
                <div className='employee-detail text-center '>
               
                    <CardBody className='text-center'>
        {data.url?<img src={process.env.PUBLIC_URL+ data.url} alt={data.name} className='rounded-circle img-fluid'></img> : <p className='initials rounded-circle'><b>{initial}</b></p>}
                        <p className='my-1'>{data.name}</p>
                        <p className='mb-0' style={{ fontSize: 14 }}>{data.jobTitle}</p>
                    </CardBody>
                
                </div>
            </Col>
        )
    });
    return (
        <div>
            <Card className='top-bar'>
                <CardBody>
                    <div className='d-flex justify-content-between'>
                        <h5>Employee directory</h5>
                        <span>
                            <input type='search' name='search' className='search' ></input>
                            <FontAwesomeIcon icon={faSearch} className='search-icon'></FontAwesomeIcon>
                        </span>
                    </div>
                </CardBody>
            </Card>
            <Card className='employee-directory'>
                <CardBody>
                    <Row className='justufy-content-between'>
                        {newData}
                    </Row>
                </CardBody>
            </Card>
        </div>
    )

}

export default Employee;
