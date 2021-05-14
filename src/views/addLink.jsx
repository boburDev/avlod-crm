import { useEffect, useState } from 'react'

import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Table,
	Row,
	Col,
	Button as MatButton,
    Modal, 
    ModalHeader, 
    ModalBody, 
    Input,
    Label,
    Form
} from "reactstrap"
import axios from 'axios'


function Links(props) {

  const [ modal, setModal] = useState(false)
  const [ tasks, setTasks ] = useState([])
  const [ link, setLink ] = useState("")
  const [ title, setTitle ] = useState("")

  const {
    className
  } = props
  
  const toggle = () => {
    setModal(!modal)
  }

  useEffect(()=> {
      (async()=>{
        try {
          const res = await axios.get('http://localhost:4001/lessons')
          const data = res.data.data
          setTasks(data)
        } catch(err) {
          console.log(err)
        }
      })()
    },[])

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4001/new-lesson', {
            data: {
                link, 
                title,
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
    <>
      <div className="content">
        <Row>
          <Col md="12">
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">
                  Tasks
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>EDIT TASK</th>
                        <th>Delete TASK</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
						  tasks && tasks.map((el,i) => <tr key={i}>
						  <td>{el.lesson_id}</td>
						  <td>{el.lesson_title}</td>
						  <td><MatButton color="info">EDIT</MatButton></td>
						  <td><MatButton color="danger">DELETE</MatButton></td>
						  </tr>)
					  }
                    </tbody>
                </Table>
              </CardBody>
            </Card>
            <MatButton onClick={toggle} color="primary">Add new lesson</MatButton>
          </Col>
        </Row>
      </div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New product</ModalHeader>
            <ModalBody>
                <Form onSubmit={(e) => submitForm(e)}>
                    <Label>Lesson link</Label>
                    <Input placeholder="https://t.me/..." onChange={e => setLink(e.target.value)} type="date" style={{"color": "black"}} name="select" />
                    <Label>Lesson title</Label>
                    <Input maxLength="999" onKeyUp={e => setTitle(e.target.value)} placeholder="To do" type="text" style={{"color": "black"}} name="select" />
                <MatButton type="submit" style={{"margin": "0 auto", "marginTop": "30px", "marginBottom": "40px", "width": "100%"}} color="primary">Submit</MatButton>{' '}
                </Form>
            </ModalBody>
        </Modal>
    </>
  )
}

export default Links