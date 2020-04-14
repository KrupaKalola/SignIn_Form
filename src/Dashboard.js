import React from 'react'
import {
    Container,
    Row,
    Col,
    CardBody,
    Card,
    CardText,
    CardTitle,
    CardHeader
} from 'reactstrap';
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBuilding, faCalendarAlt, faBriefcase, faUser, faBirthdayCake, faBed, faBaby } from '@fortawesome/free-solid-svg-icons';

const Dashboard = (props) => {

    return (
        <div>
            <header className='header'>
                <div className='top-header-section'>
                    <Container fluid={true}>
                        <Row className='align-item-center' style={{ lineHeight: '58px' }}>
                            <Col lg='3' md='3' sm='3' xs='6'>
                                <div className='logo'>
                                    <a href='Dashboard.js'>
                                        <img src={process.env.PUBLIC_URL + '/nividata_white-1.png'} alt='company-logo' style={{ width: '165px' }} />
                                    </a>
                                </div>
                            </Col>
                            <Col lg='9' md='9' sm='9' xs='6'>
                                <div className='user-block'>
                                    <Row>
                                        <Col lg='12' md='12' sm='12'>
                                            <div className='user-avatar'>
                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user-avatar' className='rounded-circle img-fluid' />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            {/* ------------Content-------------- */}
            <div className='page-wrapper'>
                <Container fluid={true}>
                    <Row>
                        <Col xl='3' lg='4' md='12' style={{ position: 'relative', overflow: 'visible', boxSizing: 'borderBox', minHeight: 1 }}>
                            <div style={{position: 'sticky', top: '0px'}}>
                                <div>
                                    <Card className='user-card card grow'>
                                        <CardBody>
                                            <CardText>
                                                Home / <span style={{ opacity: 0.7 }}>Dashboard</span>
                                                <br />
                                                <span style={{ fontSize: 20 }}>Admin Dashboard</span>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>

                                <div>
                                    <Card className='user-card card grow text-center'>
                                        <CardBody className='user-info'>
                                            <div className='mb-4'>
                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} alt='user-avatar' className='rounded-circle img-fluid' width='100' />
                                            </div>
                                            <div className='user-detail'>
                                                <h4>
                                                    <b>Welcome {localStorage.getItem('username')}</b>
                                                </h4>
                                                <p>Frontend Devloper</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card className='sidebar-wrapper card grow'>
                                        <CardBody >
                                            <Row className='sidebar-info'>
                                                <Col lg='6' md='6' sm='12' className='border-right border-bottom p-3'>
                                                    <div style={{ verticalAlign: 'middle' }}>
                                                        <FontAwesomeIcon icon={faHome} size='2x'></FontAwesomeIcon>
                                                        <p>Dashboard</p>
                                                    </div>

                                                </Col>
                                                <Col lg='6' md='6' sm='12' className='border-bottom p-3'>
                                                    <div style={{ verticalAlign: 'middle' }}>
                                                        <FontAwesomeIcon icon={faUsers} size='2x'></FontAwesomeIcon>
                                                        <p>Employees</p>
                                                    </div>
                                                </Col>
                                                <Col lg='6' md='6' sm='12' className='border-right border-bottom p-3'>
                                                    <div style={{ verticalAlign: 'middle' }}>
                                                        <FontAwesomeIcon icon={faBuilding} size='2x'></FontAwesomeIcon>
                                                        <p>Company</p>
                                                    </div>
                                                </Col>
                                                <Col lg='6' md='6' sm='12' className='border-bottom p-3'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCalendarAlt} size='2x'></FontAwesomeIcon>
                                                        <p>Calendar</p>
                                                    </div>
                                                </Col>
                                                <Col lg='6' md='6' sm='12' className='border-right p-3'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faBriefcase} size='2x'></FontAwesomeIcon>
                                                        <p>Leave</p>
                                                    </div>
                                                </Col>
                                                <Col lg='6' md='6' sm='12' className='p-3'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUser} size='2x'></FontAwesomeIcon>
                                                        <p>Profile</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                {/* <div>
                                    <Card className='top-bar'>
                                        <CardBody>
                                            <ButtonGroup size='md'>
                                                <Button className='active'>
                                                    Admin Dashboard
                                               </Button>
                                                <Button>
                                                    Admin Dashboard
                                               </Button>
                                            </ButtonGroup>
                                        </CardBody>
                                    </Card>
                                </div> */}

                                {/* <Card>
                                    <CardBody> */}
                                <div>
                                    <Row>
                                        <Col lg='3' md='6' sm='12'>
                                            <Card className='user-card card grow'>
                                                <CardBody className='d-flex'>
                                                    <div className='card-icon bg-primary'>
                                                        <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                                    </div>
                                                    <div className='card-right'>
                                                        <CardTitle><h6>Employees</h6></CardTitle>
                                                        <CardText><b>700</b></CardText>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg='3' md='6' sm='12'>
                                            <Card className='user-card card grow'>
                                                <CardBody className='d-flex'>
                                                    <div className='card-icon bg-warning'>
                                                        <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                                    </div>
                                                    <div className='card-right'>
                                                        <CardTitle><h6>Employees</h6></CardTitle>
                                                        <CardText><b>700</b></CardText>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg='3' md='6' sm='12'>
                                            <Card className='user-card card grow'>
                                                <CardBody className='d-flex'>
                                                    <div className='card-icon bg-danger'>
                                                        <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                                    </div>
                                                    <div className='card-right'>
                                                        <CardTitle><h6>Employees</h6></CardTitle>
                                                        <CardText><b>700</b></CardText>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg='3' md='6' sm='12' s>
                                            <Card className='user-card card grow'>
                                                <CardBody className='d-flex'>
                                                    <div className='card-icon bg-success'>
                                                        <FontAwesomeIcon icon={faUsers} size='2x' color='#fff' style={{ margin: 'auto' }}></FontAwesomeIcon>
                                                    </div>
                                                    <div className='card-right'>
                                                        <CardTitle><h6>Employees</h6></CardTitle>
                                                        <CardText><b>700</b></CardText>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row>
                                        <Col lg='6' md='6' sm='12'>
                                            <Card className='today-wrapper card grow'>
                                                <CardHeader className='card-header'>
                                                    <CardTitle className='today-title'><h4 className='mb-0'>Today</h4></CardTitle>
                                                </CardHeader>
                                                <CardBody className='card-body'>
                                                    <div>
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBirthdayCake} className='text-primary' style={{width:20}}></FontAwesomeIcon>
                                                            <p style={{ marginBottom: 0 , paddingLeft:20}}>No Birthday Today</p>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBed} className='text-warning' style={{width:20}}></FontAwesomeIcon>
                                                            <p style={{ marginBottom: 0 , paddingLeft:20}}>Ralph Baker is on sick leave today</p>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBaby} className='text-danger' style={{width:20}}></FontAwesomeIcon>
                                                            <p style={{ marginBottom: 0 , paddingLeft:20}}>Danny Ward is on parenting leave today</p>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faHome} className='text-info' style={{width:20}}></FontAwesomeIcon>
                                                            <p style={{ marginBottom: 0 , paddingLeft:20}}>You are working from home today</p>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg='6' md='6' sm='12'>
                                            <Card className='team-lead-wrapper card grow'>
                                                <CardHeader className='card-header'>
                                                    <CardTitle className='card-title'><h4 className='mb-0'>Team Lead</h4></CardTitle>
                                                </CardHeader>
                                                <CardBody className='card-body'>
                                                    <div>
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} className='team-lead-img rounded-circle img-fluid'></img>
                                                            </div>
                                                            <div className='pl-2'>
                                                                <p style={{ marginBottom: 0 }}>Krupa Kalola</p>
                                                                <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Design</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} className='team-lead-img rounded-circle img-fluid'></img>
                                                            </div>
                                                            <div className='pl-2'>
                                                                <p style={{ marginBottom: 0 }}>Krupa Kalola</p>
                                                                <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Design</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} className='team-lead-img rounded-circle img-fluid'></img>
                                                            </div>
                                                            <div className='pl-2'>
                                                                <p style={{ marginBottom: 0 }}>Krupa Kalola</p>
                                                                <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Design</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>

                                <div>
                                    <Row>
                                        <Col lg='6' md='6' sm='12'>
                                            <Card className='recent-activiy-wrapper card grow'>
                                                <CardHeader className='card-header'>
                                                    <CardTitle className='card-title'><h4 className='mb-0'>Recent Activities</h4></CardTitle>
                                                </CardHeader>
                                                <CardBody className='card-body'>
                                                    <div>
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} className='team-lead-img rounded-circle img-fluid'></img>
                                                            </div>
                                                            <div className='pl-3'>
                                                                <p style={{ marginBottom: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                                <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Danny Ward | 1 hour ago</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} className='team-lead-img rounded-circle img-fluid'></img>
                                                            </div>
                                                            <div className='pl-3'>
                                                                <p style={{ marginBottom: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                                <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>John Gibbs | 2 hour ago</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + '/user-avatar.jpg'} className='team-lead-img rounded-circle img-fluid'></img>
                                                            </div>
                                                            <div className='pl-3'>
                                                                <p style={{ marginBottom: 0 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                                <p style={{ marginBottom: 0, fontSize: '15px', opacity: 0.6 }}>Maria | 3 hours ago</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg='6' md='6' sm='12'>
                                            <Card className='upcoming-leaves-wrapper card grow'>
                                                <CardHeader className='card-header'>
                                                    <CardTitle className='card-title'><h4 className='mb-0'>Upcoming Leaves</h4></CardTitle>
                                                </CardHeader>
                                                <CardBody className='card-body'>
                                                    <div>
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBriefcase} className='text-primary'></FontAwesomeIcon>
                                                            <p className='pl-3' style={{ marginBottom: 0 }}>Thu, 16 Apr 2020 </p>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBriefcase} className='text-warning'></FontAwesomeIcon>
                                                            <p className='pl-3' style={{ marginBottom: 0 }}>Fri, 17 Apr 2020</p>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBriefcase} className='text-danger'></FontAwesomeIcon>
                                                            <p className='pl-3' style={{ marginBottom: 0 }}>Mon, 20 Apr 2020</p>
                                                        </div>
                                                        <hr />
                                                        <div className='d-flex' style={{ alignItems: 'center' }}>
                                                            <FontAwesomeIcon icon={faBriefcase} className='text-info'></FontAwesomeIcon>
                                                            <p className='pl-3' style={{ marginBottom: 0 }}>Fri, 24 Apr 2020</p>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;
