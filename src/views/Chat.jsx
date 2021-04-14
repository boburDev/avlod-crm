import React from 'react'
import { Link, Redirect } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
// import axios from 'axios'
// import { useApi } from 'api/api' 

export default function Chat() {
    const [addActive, setAddActive] = React.useState(false)
    return (
        <>
            <div className="content">
                <Row>
                    <div className="wrapper">
                        <nav id="sidebar" className={`${addActive ? 'active' : ''}`}>
                            <div className="sidebar-header">
                                <h3>Users List</h3>
                            </div>
                            <ul className="list-unstyled components">
                                <p>Dummy Heading</p>
                                <li>
                                    About
                                </li>
                                <li>
                                    Portfolio
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </nav>
                        <div id="content">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">

                                    <Button type="button" id="sidebarCollapse" className="btn btn-info" onClick={()=>setAddActive(!addActive)}>
                                        <i className="fas fa-align-left"></i>
                                    </Button>
                                    <Button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-align-justify"></i>
                                    </Button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="nav navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="#">Page</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <h2>Collapsible Sidebar Using Bootstrap 4</h2>
                            <p>
                                

                            </p>

                            <div className="line"></div>

                            <h2>Lorem Ipsum Dolor</h2>
                            <p>
                                
                            </p>

                            <div className="line"></div>

                            <h2>Lorem Ipsum Dolor</h2>
                            <p>
                                
                            </p>

                            <div className="line"></div>

                            <h3>Lorem Ipsum Dolor</h3>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    )
}