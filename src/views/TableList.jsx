import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import axios from 'axios'
import { useApi } from 'api/api'
import { useState, useEffect } from "react";


function Tables() {

	const [admins, setAdmin] = useState([
		{
			id: 1,
			admin_status: "Admin"
		}
	])
	const [students, setStudents] = useState([])
	const [api] = useApi()  
	const accessToken = window.localStorage.getItem('access_token')
	useEffect(()=> {
		;(async()=>{
			try {
				const res = await axios.get(api + '/admin', {
					headers: {
						access_token: accessToken
					}
				})
				const data = res.data.data
				setStudents(data.students)
				setAdmin(data.admins)
			} catch(err) {
				console.log(err)
			}
		})()
   },[api, accessToken])

  return (
    <>
      <div className="content">
        <Row>
          {
			  admins.length ? <Col md="12">
			  <Card>
				<CardHeader>
				  <CardTitle tag="h4">Admins Table</CardTitle>
				  <p className="category">Here we can see admis position and spec</p>
				</CardHeader>
				<CardBody>
				  <Table className="tablesorter" responsive>
					<thead className="text-primary">
						<tr>
						<th>Name</th>
						<th>empty</th>
						<th>empty</th>
						<th>empty</th>
						<th className="text-center">status</th>
					  </tr>
					</thead>
					<tbody>
					{
					  admins.map((item, key)=><tr key={key}>
						  <td>{item.admin_name}</td>
						  <td>empty</td>
						  <td>empty</td>
						  <td>empty</td>
						  <td className="text-center">{item.admin_status}</td>
					  </tr>)
					  }
					</tbody>
				  </Table>
				</CardBody>
			  </Card>
			</Col> : ''
		  }
          {
			  students.length ? <Col md="12">
			  <Card className="card-plain">
			  <CardHeader>
				  <CardTitle tag="h4">Students Table</CardTitle>
				</CardHeader>
				<CardBody>
				  <Table className="tablesorter" responsive>
					<thead className="text-primary">
					  <tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Lesson</th>
						<th>group</th>
					  </tr>
					</thead>
					<tbody>
					  {
						  students.map((item, key)=> <tr key={key}>
							  <td>{`${item.user_name}  ${item.user_surname}`}</td>
							  <td>{item.user_number}</td>
							  <td>{item.user_lesson}</td>
							  <td>{item.user_study_type === 2 ? 'Offline' : 'Online'}</td>
						  </tr>)
					  }
					</tbody>
				  </Table>
				</CardBody>
			  </Card>
			</Col> : ''
		  }
        </Row>
      </div>
    </>
  );
}

export default Tables;
