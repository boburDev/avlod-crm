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
                    <div id="wrapper">
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
                                        <ul className="nav navbar-nav ml-auto" style={{display: 'none'}}>
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
                            <div className="container-fluid ">
                            <Row>
                                <Col md="12" className="chat_body" style={{backgroundColor: '#fff'}}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi aut officia non corrupti rem officiis temporibus earum sunt autem quasi, reiciendis animi obcaecati fuga in. Alias, officiis provident pariatur expedita delectus, adipisci, culpa cumque corporis suscipit unde asperiores quod iure beatae quisquam similique possimus tenetur maiores eum fugiat molestias omnis! Commodi nisi autem, fugiat eius deserunt aliquid eveniet eaque voluptatum non repudiandae? At earum consequuntur beatae possimus quibusdam rem commodi autem, quos provident impedit aspernatur explicabo nobis aliquid voluptatibus, neque est consequatur sed, doloribus a dolorum optio? Sapiente tenetur fuga exercitationem sed architecto dolore ullam ea, reiciendis commodi aperiam.
                                </Col>
                            </Row>
                            </div>

                        </div>
                    </div>
                </Row>
            </div>
        </>
    )
}