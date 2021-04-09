import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";

export default function Profile() {
    return (
        <>
          <div className="container mt-5">
            <Row>
              <Col md="12">
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
                              placeholder="name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="3">
                          <FormGroup>
                            <label>Surname:</label>
                            <Input
                              placeholder="surname"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="4">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">
                                Tug'ulgan kuni:
                            </label>
                            <Input placeholder="19/07/2000" type="date" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                            <FormGroup>
                                <label>Telefon raqam:</label>
                                <Input
                                defaultValue=""
                                placeholder="+998998616951"
                                type="text"
                                />
                            </FormGroup>
                        </Col>
                      <Col className="pr-md-1" md="6">
                            <FormGroup>
                            <Label for="exampleSelect">Dars soni:</Label>
                                <Input type="select" name="select" id="exampleSelect" defaultValue="6">
                                    <option value="0">Tanlang</option>
                                {
                                    Array(72).fill('@').map((i,index)=> <option value={index+1} key={index}>{index+1} dars</option>)
                                }
                                </Input>
                            </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Address</label>
                            <Input
                              defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Username:</label>
                            <Input
                              placeholder="username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>Password:</label>
                            <Input
                              placeholder="password"
                              type="text"
                            />
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
            </Row>
          </div>
        </>
      );
}