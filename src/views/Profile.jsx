import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
  CustomInput,
} from "reactstrap";

import axios from 'axios'
import { useApi } from 'api/api'

export default function Profile() {

	const [name,setName] = React.useState('')
	const [surname,setSurname] = React.useState('')
	const [birthday,setBirthday] = React.useState('')
	const [number,setNumber] = React.useState('')
	const [lesson,setLesson] = React.useState('')
	
	const [api] = useApi()  
	const accessToken = window.localStorage.getItem('access_token')
	React.useEffect(()=>{
		;(async()=>{
			try {
					const res = await axios.get(api + '/user', {
						headers: {
							access_token: accessToken
						}
					})
					const data = res.data
					const dataObj = data.data
					if (data && data.is_user) {
						setName(dataObj.name)
						setSurname(dataObj.surname)
						setBirthday(dataObj.birthday)
						setNumber(dataObj.number)
						setLesson(dataObj.lesson)	
					}else {
						window.location.href = '/'
					}
			} catch(err) {
				console.log(err)
			}
		})()
	},[api, accessToken])

	const [filename, setFilename] = React.useState({ fileName: '', invalidFile: false })

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
    return (
        <>
          <div className="content">
            <Row>
              <Col md="8">
                <Card>
                  <CardHeader>
                    <h5 className="title">Student Profile</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Name:</label>
                            <Input
							  disabled
                              placeholder={name}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="3">
                          <FormGroup>
                            <label>Surname:</label>
                            <Input disabled
                              placeholder={surname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">
                                Tug'ulgan kuni:
                            </label>
                            <Input disabled placeholder={birthday} type="date" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                            <FormGroup>
                                <label>Telefon raqam:</label>
                                <Input disabled
                                defaultValue=""
                                placeholder={number}
                                type="text"
                                />
                            </FormGroup>
                        </Col>
                      <Col className="pr-md-1" md="6">
                            <FormGroup>
                            <Label for="exampleSelect">Dars soni:</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option value="0">Tanlang</option>
                                {
                                    Array(lesson-0).fill('@').map((i,index)=> <option value={index+1} key={index}>{index+1} dars</option>)
                                }
                                </Input>
                            </FormGroup>
                        </Col>
                      </Row>
                      <Row>
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
                      </Row>
                      <Row>
                        <Col md="8">
                          <FormGroup>
                            <label>Dars haqida fikringiz</label>
                            <Input
							 
                              cols="80"
                              placeholder="..."
                              rows="4"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <Button className="btn-fill" color="primary" type="submit">
                      Save
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
					  	style={{objectFit: "cover"}}
                        alt="..."
                        className="avatar"
                        src={'' || require("assets/img/user.png").default}
						width="100"
						height="100"
                      />
					  
                      <h5 className="title">{'' || 'Mike Andrew'}</h5>
                    </a>
                    <p className="description">{'' || 'On Process...'}</p>
                  </div>
                  <div className="card-description">
                    Description on process
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    
                  </div>
                </CardFooter>
              </Card>
            </Col>
            </Row>
          </div>
        </>
      );
}