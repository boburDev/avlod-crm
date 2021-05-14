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
//   const [ variant ] = useState('success')
  const [ tasks, setTasks ] = useState([])

  const [ date, setDate ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ body, setBody ] = useState("")

  const {
    className
  } = props
  
  const toggle = () => {
    setModal(!modal)
  }

  useEffect(()=> {
      (async()=>{
        try {
          const res = await axios.get('http://localhost:4001/tasks')
          const data = res.data.data
          setTasks(data)
        } catch(err) {
          console.log(err)
        }
      })()
    },[])

    const submitForm = (e) => {
        e.preventDefault()

        console.log(date, title, body)

        axios.post('http://localhost:4001/new-task', {
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
    <>
      <div className="content">
        <Row>
          <Col md="12">
            {/* <Modal
              toggle={toggle} 
              modal={modal} 
              setModal={setModal}
              className={className}
              variant={variant}
            /> */}
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
                        <th>Task</th>
                        <th>EDIT TASK</th>
                        <th>Delete TASK</th>
                        <th>Created date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
						  tasks && tasks.map((el,i) => <tr key={i}>
						  <td>{el.task_id}</td>
						  <td>{el.task_title}</td>
						  <td>{el.task_body}</td>
						  <td><MatButton color="info">EDIT</MatButton></td>
						  <td><MatButton color="danger">DELETE</MatButton></td>
						  <td>{el.task_date}</td>
						  </tr>)
					  }
                    </tbody>
                </Table>
              </CardBody>
            </Card>
            <MatButton onClick={toggle} color="primary">Add new task</MatButton>
          </Col>
        </Row>
      </div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New product</ModalHeader>
            <ModalBody>
                <Form onSubmit={(e) => submitForm(e)}>
                        <Label>Task date</Label>
                        <Input placeholder="23/08/12" onChange={e => setDate(e.target.value)} type="date" style={{"color": "black"}} name="select" />
                        <Label>Task title</Label>
                        <Input maxLength="6" onKeyUp={e => setTitle(e.target.value)} placeholder="To do" type="text" style={{"color": "black"}} name="select" />
                        <Label>Task definition</Label>
                        <Input maxLength="256" onKeyUp={e => setBody(e.target.value)} placeholder="Definition" type="textarea" style={{"color": "black"}} name="text" id="exampleText" />
                <MatButton type="submit" style={{"margin": "0 auto", "marginTop": "50px", "marginBottom": "40px", "width": "100%"}} color="primary">Submit</MatButton>{' '}
                </Form>
            </ModalBody>
        </Modal>
    </>
  )
}

export default Links