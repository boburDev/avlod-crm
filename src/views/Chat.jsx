import React from 'react'
import { Link } from "react-router-dom";
import openSocket from "socket.io-client"
import axios from 'axios'
import {
    Button,
    Row,
    Col,
} from "reactstrap";
// import axios from 'axios'
import { useApi } from 'api/api' 
export default function Chat() {
    
    const [addActive, setAddActive] = React.useState(false)
    const [api] = useApi()
    
    React.useEffect(() => {
        ;(async()=>{
            const socket = openSocket(api, {transports: ['websocket']})
            if (api) {
                const res = await axios.get(api)
                console.log(res.data)
                socket.on('connect', ()=>{
                    console.log('new connect')
                })
            }
        })()
      }, [api])

      function chatKeyboard (e) {
          const socket = openSocket(api, {transports: ['websocket']})
          if (e.keyCode === 13) {
            socket.emit('new message', { message : e.target.value })
            e.target.value = ''
          }
      }

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
                                    <div className="text_wrapper">
                                        <Col md="2">
                                            
                                        </Col>
                                    </div>
                                    <div className="chat_footer">
                                        <Row>
                                            <Col md="12">
                                                <textarea onKeyUp={chatKeyboard} className="chat_keyboard" cols="30" rows="3" placeholder="Message"></textarea>
                                            </Col>
                                        </Row>
                                    </div>
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