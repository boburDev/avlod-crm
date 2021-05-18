import React from "react";
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
    Label,
    CardFooter,
    CustomInput
} from "reactstrap";
import { useApi } from 'api/api'
import axios from 'axios'

import { Link } from "react-router-dom";

export default function CreateUser() {

    const [filename, setFilename] = React.useState({ fileName: '', invalidFile: false })
    const [api] = useApi()
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [mentor,setMentor] = React.useState('')
    const [type,setType] = React.useState('')

    function handleFileChange({target: {files}}) {
        const cancel = !files.length;
        if (cancel) return;
        const [{ size, name }] = files;
        const maxSize = 200000;

        if (size < maxSize) {
        setFilename({ fileName: name, invalidFile: false });
        } else {
        setFilename({ fileName: '', invalidFile: true });
        }
    }

    function SignUpForm(e) {
        e.preventDefault()
        ;(async()=>{
            const newUser = {
                mentor: mentor.toLowerCase(),
                type,
                username,
                password
            }
			try {
                if (mentor.length) {
                    const res = await axios.post(api + '/new-user', newUser)
                    const data = res.data
                    localStorage.setItem('access_token', data.token)
                    if(localStorage.getItem('access_token')){
                        window.location.href = '/user'
                    }
                }
			} catch(err) {
				console.log(err)
			}
		})()
    }

    return(
        <>
            <div className="container">
                <Row className="mt-5">
                    <Col md="8" className="mx-auto">
                        <Card>
                            <CardHeader className="mx-auto">
                                <h3 className="title mb-0">Sign Up</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={SignUpForm}>
                                    <Row className="mx-auto">
                                        <Col className="pr-md-3 mx-auto" md="12">
                                            <FormGroup>
                                                <Label for="exampleSelect">Mentor ismi:</Label>
                                                <Input type="select" name="select" id="exampleSelect" onChange={e => setMentor(e.target.value)}>
                                                <option value="0">Mentor tanlang</option>
                                                <option value="Malika">Malika</option>
                                                <option value="Ozodbek">Ozodbek</option>
                                                <option value="Shahobiddin">Shahobiddin</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="12">
                                            <FormGroup>
                                                <label>Username:</label>
                                                <Input
                                                onKeyUp={(e)=>setUsername(e.target.value)}
                                                defaultValue=""
                                                placeholder="username"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>                                    
                                        <Col className="pr-md-3 mx-auto" md="12">
                                            <FormGroup>
                                                <label>Password:</label>
                                                <Input
                                                onKeyUp={(e)=>setPassword(e.target.value)}
                                                defaultValue=""
                                                placeholder="password"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>                                    
                                        <Col className="pr-md-3 mx-auto" md="12">
                                            <FormGroup>
                                                <Label for="exampleSelect">O'qish turi:</Label>
                                                <Input type="select" name="select" id="exampleSelect" onChange={e => setType(e.target.value)}>
                                                <option value="0">Tanlang</option>
                                                <option value="1">Online</option>
                                                <option value="2">Offline</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                       <Row className="mx-auto w-100">
                                            <Col className="d-flex justify-content-between align-items-center pr-md-3" md="12">
                                                <Button className="btn-fill" color="primary" type="submit">
                                                    Submit
                                                </Button>
                                                <Link to='/login'>Go to Login</Link>
                                            </Col>
                                       </Row>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter className="d-none">
                                <Col className="pr-md-3 mx-auto" color="primary" md="12">
                                    <FormGroup>
                                        <label>Rasm:</label>
                                        <CustomInput
                                        type="file"
                                        id="FileBrowser"
                                        name="customFile"
                                        onChange={handleFileChange}
                                        label={filename.fileName || 'Rasmingizni yuklang'}
                                        invalid={filename.invalidFile} />
                                    </FormGroup>
                                    </Col>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
