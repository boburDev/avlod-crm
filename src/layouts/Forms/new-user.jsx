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
    CustomInput,
} from "reactstrap";
  

export default function CreateUser() {

    const [filename, setFilename] = React.useState({ fileName: '', invalidFile: false })


    function handleFileChange({target: {files}}) {
        const cancel = !files.length;
        if (cancel) return;

        const [{ size, name }] = files;
        const maxSize = 500000;

        if (size < maxSize) {
        setFilename({ fileName: name, invalidFile: false });
        } else {
        setFilename({ fileName: '', invalidFile: true });
        }
    }


    function LoginForm(e) {
        e.preventDefault()

        // window.location.href = '/admin/dashboard'
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
                                <Form onSubmit={LoginForm}>
                                    <Row className="mx-auto">
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Ismi:</label>
                                                <Input
                                                onKeyUp={(e)=> console.log("ok")}
                                                defaultValue=""
                                                placeholder="Ismi"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Familiya:</label>
                                                <Input
                                                onKeyUp={(e)=>console.log("ok")}
                                                defaultValue=""
                                                placeholder="Familiya"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
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
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Familiya:</label>
                                                <Input
                                                onKeyUp={(e)=>console.log("ok")}
                                                defaultValue=""
                                                placeholder="Familiya"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Ismi:</label>
                                                <Input
                                                onKeyUp={(e)=> console.log("ok")}
                                                defaultValue=""
                                                placeholder="Ismi"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Familiya:</label>
                                                <Input
                                                onKeyUp={(e)=>console.log("ok")}
                                                defaultValue=""
                                                placeholder="Familiya"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Ismi:</label>
                                                <Input
                                                onKeyUp={(e)=> console.log("ok")}
                                                defaultValue=""
                                                placeholder="Ismi"
                                                type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pr-md-3 mx-auto" md="6">
                                            <FormGroup>
                                                <label>Familiya:</label>
                                                <Input
                                                onKeyUp={(e)=>console.log("ok")}
                                                defaultValue=""
                                                placeholder="Familiya"
                                                type="text"
                                                />
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
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}