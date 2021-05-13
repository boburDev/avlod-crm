import { useEffect, useState } from 'react'
import Modal from './Modal'

import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Table,
	Row,
	Col,
	Button as MatButton
} from "reactstrap";
import axios from 'axios';


function Tables(props) {

  const [ modal, setModal] = useState(false);
  const [ variant ] = useState('success')
  const [ tasks, setTasks ] = useState([])

  const {
    className
  } = props;
  
  const toggle = (e) => {
    setModal(!modal)
  };

  useEffect(()=> {
      ;(async()=>{
        try {
          const res = await axios.get('http://localhost:4001/tasks')
          const data = res.data.data
          console.log(data)
          setTasks([ ])
        } catch(err) {
          console.log(err)
        }
      })()
    })

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Modal
              toggle={toggle} 
              modal={modal} 
              setModal={setModal}
              className={className}
              variant={variant}
            />
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
                        <th>Task</th>
                        <th>EDIT TASK</th>
                        <th>Delete TASK</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>1</td>
                      <td>Aka</td>
                      <td><MatButton color="info">EDIT</MatButton></td>
                      <td><MatButton color="danger">DELETE</MatButton></td>
                      </tr>
                    </tbody>
                </Table>
              </CardBody>
            </Card>
            <MatButton onClick={toggle} color="primary">Add new task</MatButton>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
