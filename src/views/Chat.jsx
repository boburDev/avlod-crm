import React from 'react'
// import { Link } from "react-router-dom";
import openSocket from "socket.io-client"
import sendIcon from '../assets/img/send-button.png'
import clipIcon from '../assets/img/clip.png'
import axios from 'axios'
import {
    Button,
    Row,
    Col,
} from "reactstrap";
// import axios from 'axios'
import { useApi } from 'api/api' 
export default function Chat({ role }) {
    
    const [addActive, setAddActive] = React.useState(false)
    const [userId, setUserId] = React.useState('')
    const [api] = useApi()
    const [students, setStudents] = React.useState([])
    const [info, setInfo] = React.useState({})
    React.useEffect(() => {
        ;(async()=>{
            const socket = openSocket(api, {transports: ['websocket']})
            if (api) {
                // console.log(api)
                // const res = await axios.get(api)
                // console.log(res.data)
                socket.on('connect', ()=>{
                    console.log('new connect')

                    socket.on('receive', ({ message }) => {
                        console.log( message )
                    })
                })
            }
        })()
      }, [api])
    
      const accessToken = window.localStorage.getItem('access_token')

    React.useEffect(()=>{
        ;(async()=>{
            if (api) {
                try {
                    if (role === 'admin') {
                        const res = await axios.get(api + '/admin', {
                            headers: {
                                access_token: accessToken
                            }
                        })
                        const data = res.data.data
                        setInfo(data.info.admin_unique_id)
                        setStudents(data.students)
                    } else if(role === 'user'){
                        const res = await axios.get(api + '/user', {
                            headers: {
                                access_token: accessToken
                            }
                        })
                        const data = res.data.data
                        setInfo(data.unique_id)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        })()
    },[api, accessToken, role])

    function getUserIdOnClick() {
        const socket = openSocket(api, {transports: ['websocket']})
        setUserId(info)
        socket.emit('join', { username: info })
    }



    function chatKeyboard (e) {
        const socket = openSocket(api, {transports: ['websocket']})
        if (e.keyCode === 13) {
            console.log(userId)
            socket.emit('send_message', { username: userId, message : e.target.value })
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
                               {
                                   students && students.map((val, key) => <li className="user-name" key={key}>
                                    {val.user_name + " " + val.user_surname}
                                   </li>)
                               }
                            </ul>
                        </nav>
                        <div id="content" className="chat-content">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light chat-navbar-user">
                                <div className="container-fluid">
                                    <Button type="button" id="sidebarCollapse" className="btn btn-info" onClick={()=>setAddActive(!addActive)}>
                                        <i className="fas fa-align-left"></i>
                                    </Button>
                                </div>
                            </nav>
                            <div className="container-fluid">
                            <Row>
                                <Col md="12" className="chat_body" onClick={() => {
                                    getUserIdOnClick(info)
                                }} style={{backgroundColor: '#fff'}}>
                                    <div className="text_wrapper">
                                        <div className="chat-messages">
                                            <div className="reciaved_msg">
                                                <p>
                                                    Hi
                                                    <sub>08:00 AM</sub>
                                                </p>
                                            </div>
                                            <div className="sended_msg">
                                                <p>
                                                    Hey
                                                    <sub>08:00 PM</sub>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Col md={12} style={{paddingRight: 0}}>
                                    <div className="chat_footer">
                                        <Row>
                                            <textarea onKeyUp={chatKeyboard} className="chat_keyboard" cols="30" rows="3" placeholder="Message"></textarea>
                                            <form className="footer_form" encType="multipart/form-data">
                                                <label htmlFor="clip">
                                                    <img src={clipIcon} alt="clip" />
                                                    <input type="file" hidden id="clip" />
                                                </label>
                                                <button><img src={sendIcon} alt="sendBtn" /></button>
                                            </form>
                                        </Row>
                                    </div>
                                    </Col>
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