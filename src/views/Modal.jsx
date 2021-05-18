import axios from "axios"
import { useState } from "react"
import {
    Button as MatButton,
    Modal, 
    ModalHeader, 
    ModalBody, 
    Input,
    Label,
    Form
  } from "reactstrap"
import { useApi } from 'api/api'
function Createmodal ({ toggle, className, modal }) {

    const [ date, setDate ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")
    const [api] = useApi()
    const submitForm = (e) => {
        e.preventDefault()
        axios.post(api+'/new-task', {
            data: {
                date, 
                title,
                body
            }
        })
            .then((response) => {
                if(response) {
                    console.log(response)
                }
            }, (error) => {
                console.log(error);
        });
    }

    return (
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New product</ModalHeader>
            <ModalBody>
                <Form onSubmit={submitForm}>
                        <Label>Task date</Label>
                        <Input placeholder="23/08/12" onChange={e => setDate(e.target.value)} type="date" style={{"color": "black"}} name="select" />
                        <Label>Task title</Label>
                        <Input maxLength="999" onKeyUp={e => setTitle(e.target.value)} placeholder="To do" type="text" style={{"color": "black"}} name="select" />
                        <Label>Task definition</Label>
                        <Input maxLength="256" onKeyUp={e => setBody(e.target.value)} placeholder="Definition" type="textarea" style={{"color": "black"}} name="text" id="exampleText" />
                <MatButton type="submit" style={{"margin": "0 auto", "marginTop": "50px", "marginBottom": "40px", "width": "100%"}} color="primary">Submit</MatButton>{' '}
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default Createmodal