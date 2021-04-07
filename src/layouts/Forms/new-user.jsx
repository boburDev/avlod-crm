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
import './new-user.css'

export default function CreateUser() {

    const [filename, setFilename] = React.useState({ fileName: '', invalidFile: false })
    const [api] = useApi()
    const [name,setName] = React.useState('')
    const [surname,setSurname] = React.useState('')
    const [birthday,setBirthday] = React.useState('')
    const [lesson,setLesson] = React.useState('')
    const [number,setNumber] = React.useState('')
    const [mentor,setMentor] = React.useState('')
    const [taklif,setTaklif] = React.useState('')
    const [fikr,setFikr] = React.useState('')


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
                name,
                surname,
                birthday,
                number,
                mentor,
                taklif,
                lesson,
                fikr
            }
            console.log(newUser);
			try {

                if (name.length && surname.length && birthday.length && number.length && mentor.length) {
                    const res = await axios.post(api + '/new-user', newUser)
                    const data = res.data

                    console.log(data)


                    // window.location.href = '/login'
                }
				
			} catch(err) {
				console.log(err)
			}
		})()
    }

    return(
        <>
            <div className="container pt-5">
                <Row className="mt-5">
                    <Col md="12" className="mt-5 mx-auto">
                        <Card>
                            <CardHeader className="pt-md-4 mx-auto">
                                <h3 className="title mb-0">Forma</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={SignUpForm}>
                                    <Row className="mx-auto">
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Ismi:</label>
                                                <Input
                                                onKeyUp={(e)=> setName(e.target.value)}
                                                defaultValue=""
                                                placeholder="Boburmirzo"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Familiya:</label>
                                                <Input
                                                onKeyUp={(e)=>setSurname(e.target.value)}
                                                defaultValue=""
                                                placeholder="Negmatov"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Tug'ulgan kuni:</label>
                                                <Input
                                                onKeyUp={(e)=> setBirthday(e.target.value)}
                                                defaultValue=""
                                                placeholder="19/07/2000"
                                                type="date"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                            <Label for="exampleSelect">Dars soni:</Label>
                                                <Input type="select" name="select" id="exampleSelect" onChange={e => setLesson(e.target.value)}>
                                                    <option value="0">Tanlang</option>
                                                {
                                                    Array(72).fill('@').map((i,index)=> <option value={index+1} key={index}>{index+1} dars</option>)
                                                }
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Telefon raqam:</label>
                                                <Input
                                                onKeyUp={(e)=>setNumber(e.target.value)}
                                                defaultValue=""
                                                placeholder="+998998616951"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
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
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup className="d-flex flex-column">
                                                <label>Dars haqida Fikringiz (Ixtiyoriy):</label>
                                                <textarea onKeyUp={e => setFikr(e.target.value)} className="form-control" style={{resize: 'none', backgroundColor: '#27293d', borderColor: '#2b3553', color: '#fff', borderRadius: '8px',outline:'none'}} cols="10" rows="3" placeholder="..."></textarea>
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup className="d-flex flex-column">
                                                <label>Dars uchun taklif (Ixtiyoriy):</label>
                                                <textarea onKeyUp={e => setTaklif(e.target.value)} className="form-control" style={{resize: 'none', backgroundColor: '#27293d', borderColor: '#2b3553', color: '#fff', borderRadius: '8px',outline:'none'}} cols="10" rows="3" placeholder="..."></textarea>
                                            </FormGroup>
                                        </Col>
                                        
                                       <Row className="mx-auto">
                                            <Col className="pr-md-3" md="6">
                                                <Button className="btn-fill" color="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Col>
                                       </Row>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter className="d-none">
                                <Col className="pr-md-3 mx-auto" color="primary" md="6">
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

// localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYm9idXJtaXJ6byIsInB3IjoiMTIzNDUiLCJzdGF0dXMiOjEsImlhdCI6MTYxNzc2NTUyNiwiZXhwIjoxNjE4MzcwMzI2fQ.xjN0O_QT85OQdOD7lK4KAbM-oMLPsn6HtQcZuG128j4')