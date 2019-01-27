import React, { PureComponent } from 'react'
import { Card,Form,FormGroup,Label,Input, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox, Upload  } from 'antd';
import TableItem from './EditableTable'
import imgQR from '../../assets/img/brand/sample.png'
const Step = Steps.Step;
const stepsBuyer = [{
  title: 'ผู้เบิก',
  status: 'finish',
  icon: <Icon style={{color: "green"}}type="user" />
}, {
  title: 'ผู้อนุมัติ',
  status: 'process',
  icon: <Icon type="user" />
}, {
  title: 'ผู้รับสินค้า',
  status: 'wait',
  icon: <Icon type="user" />
},];

export default class Index extends PureComponent {
  state = {
    current: 1,}
    render() {
      const {current} = this.state
         return(
            <div className="animated fadeIn">
                  <hr></hr>
                  <div style={{marginBottom: 10}}>
        <Steps current={current}>
                    {stepsBuyer.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
      </div>
            <Card>
              <CardHeader>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div>
                      <strong><h4>ใบเบิกสินค้ำย่อย</h4></strong>
                      </div>
                      <div>
                      <Button type="primary">ตกลง</Button>
                  </div>
                  </div>
              </CardHeader>
              <CardBody>
              <Form>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div><FormGroup row>
                        <Label for="exampleEmail" style={{marginLeft:15}}>จากหน่วยงาน</Label>
                        <Col sm={8}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup></div>
                    <img src={imgQR} width={100} height={100}/>
                </div>
                      <TableItem />
                  </Form>
            </CardBody>
            </Card>
            </div>  
         )
    }
}



















