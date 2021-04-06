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
} from "reactstrap";
  

export default function Auth() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')


    function LoginForm(e) {
        e.preventDefault()
        console.log(username, password)
    }


    return(
        <>
            <div className="container">
                <Row className="mt-5">
                    <Col md="6" className="mt-5 mx-auto">
                        <Card>
                            <CardHeader className="pt-md-4 mx-auto">
                                <h3 className="title mb-0">Login</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={LoginForm}>
                                    <Row className="mx-auto">
                                        <Col className="pr-md-3 mx-auto" md="8">
                                            <FormGroup>
                                                <label>Username:</label>
                                                <Input
                                                onKeyUp={(e)=>setUsername(e.target.value)}
                                                defaultValue=""
                                                placeholder="Username"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="8">
                                            <FormGroup>
                                                <label>Password:</label>
                                                <Input
                                                onKeyUp={(e)=>setPassword(e.target.value)}
                                                defaultValue=""
                                                placeholder="Password"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="8">
                                            <Button className="btn-fill" color="primary" type="submit">
                                                Login
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}