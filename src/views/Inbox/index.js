import React, { PureComponent } from 'react'
import { Card,Form,FormGroup,Label,Input, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox, Upload  } from 'antd';
import TableItem from './EditableCell'
const Step = Steps.Step;
const stepsBuyer = [{
  title: 'ผู้เบิก',
  status: 'finish',
  icon: <Icon type="user" />
}, {
  title: 'ผู้อนุมัติ',
  status: 'process',
  icon: <Icon type="loading" />
}, {
  title: 'ผู้รับสินค้า',
  status: 'wait',
  icon: <Icon type="user" />
},];

export default class Index extends PureComponent {
  state = {
    current: 1,}
    render() {
         return(
            <div className="animated fadeIn">
                  <hr></hr>
            <Card>
              <CardHeader>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div>
                      <strong><h4>Inbox</h4></strong>
                      </div>
                  </div>
              </CardHeader>
              <CardBody>
              <Form>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div><FormGroup row>
                        <Label for="exampleEmail">ค้นหา</Label>
                        <Col sm={8}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup></div>
                      <div>
                        <Button type="primary">อนุมัติ</Button>
                        <Button type="danger">ไม่อนุมัติ</Button>
                        </div>
                </div>
                      <TableItem />
                  </Form>
            </CardBody>
            </Card>
            </div>  
         )
    }
}



















