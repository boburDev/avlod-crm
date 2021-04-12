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
import { useEffect, useState } from "react";


function Tables() {

	const [admins] = useState([])
	const [students] = useState([])
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
				const data = res.data
				console.log(data)
			} catch(err) {
				console.log(err)
			}
		})()
   },[api, accessToken])

   console.log(students);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
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
          </Col>
          <Col md="12">
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
                      <th className="text-center">group</th>
                    </tr>
                  </thead>
                  <tbody>
					{/* {
						students.map((item, key)=> <tr key={key}>
							<td>{`${item.user_name}  ${item.user_surname} ${item.user_father_name}`}</td>
							<td>{item.user_number}</td>
							<td>{item.user_lesson}</td>
							<td className="text-center">{item.user_group}</td>
						</tr>)
					} */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
