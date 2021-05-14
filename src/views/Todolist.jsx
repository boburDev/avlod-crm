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
import { useApi } from 'api/api'

function Tables(props) {

  const [ modal, setModal] = useState(false);
  const [ variant ] = useState('success')
  const [ tasks, setTasks ] = useState([])
  const [api] = useApi()
  const {
    className
  } = props;
  
  const toggle = () => {
    setModal(!modal)
  };

  useEffect(()=> {
      ;(async()=>{
        try {
          const res = await axios.get(api+'/tasks')
          const data = res.data.data
          setTasks(data)
        } catch(err) {
          console.log(err)
        }
      })()
    },[api])

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
    </>
  );
}

export default Tables;
