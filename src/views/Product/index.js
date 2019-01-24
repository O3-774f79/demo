import React, { PureComponent } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox  } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'ฝ่ายจัดซื้อ',
  status: 'finish',
  icon: <Icon type="user" />
}, {
  title: 'ฝ่ายบัญชีและการเงิน',
  status: 'process',
  icon: <Icon type="loading" />
}, {
  title: 'เสร็จสิ้น',
  status: 'wait',
  icon: <Icon type="smile-o" />
}];
const stepsBuyer = [{
  title: 'ซุปเปอร์ไวเซอร์',
  status: 'finish',
  icon: <Icon type="user" />
}, {
  title: 'ประธานกลุ่มสินค้า',
  status: 'process',
  icon: <Icon type="loading" />
}, {
  title: 'กรรมการผู้จัดการฝ่าย',
  status: 'wait',
  icon: <Icon type="user" />
},
{
  title: 'ผู้จัดการฝ่าย',
  status: 'wait',
  icon: <Icon type="user" />
}];
export default class Index extends PureComponent {
  state = {    current: 1,}
    render() {
      const { current } = this.state;
         return(
            <div className="animated fadeIn">
             <div><h2><b>ใบขอให้มี & แจ้งผลการทดสอบสินค้าตัวอย่าง</b></h2></div>
            <hr></hr>
                  <div style={{marginBottom: 10}}>
        <Steps current={current}>
                    {stepsBuyer.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
      </div>
            <Card>
              <CardHeader>
             
              </CardHeader>
              <CardBody>
                  
            </CardBody>
            </Card>
            </div>  
         )
    }
}



















