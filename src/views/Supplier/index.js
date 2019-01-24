import React, { PureComponent } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import 'antd/dist/antd.css';
import './index.css';
import { Steps, Button, message,Icon,Tabs,Checkbox  } from 'antd';
import Select from 'react-select';
import EditableTable from './EditableTable'
const Step = Steps.Step;
const TabPane = Tabs.TabPane;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
function callback(key) {
  console.log(key);
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
const emp = [
  { value: 'chocolate', label: 'ก' },
  { value: 'strawberry', label: 'ข' },
  { value: 'vanilla', label: 'ค' }
]
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
  state = {
    current: 1,
    selectedOption1: null,
    selectedOption2: null,
    selectedOption3: null,
    selectedOption4: null,
    selectedOption5: null,
    selectedOption6: null,
    selectedOption7: null,
    selectedOption8: null,
  }
  handleChange1 = (selectedOption1) => {
    this.setState({ selectedOption1 });
  }
  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 });
  }
  handleChange3 = (selectedOption3) => {
    this.setState({ selectedOption3 });
  }
  handleChange4 = (selectedOption4) => {
    this.setState({ selectedOption4 });
  }
  handleChange5 = (selectedOption5) => {
    this.setState({ selectedOption5 });
  }
  handleChange6 = (selectedOption6) => {
    this.setState({ selectedOption6 });
  }
  handleChange7 = (selectedOption7) => {
    this.setState({ selectedOption7 });
  }
  handleChange8 = (selectedOption8) => {
    this.setState({ selectedOption8 });
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
    render() {
      const { current,selectedOption1,selectedOption2,selectedOption3,selectedOption4,selectedOption5,selectedOption6,selectedOption7,selectedOption8  } = this.state;
         return(
            <div className="animated fadeIn">
            <div><h2><b>การขอเพิ่ม Supplier</b></h2></div>
            <hr></hr>
                  <div style={{marginBottom: 10}}>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
        </Steps>
      </div>
      <Tabs onChange={callback} type="card">
          <TabPane tab="ฝ่ายจัดซื้อ" key="1"> 
              <Card style={{width:"100%",marginBottom: 100}}>
                    <CardHeader>
                      <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div>
                      <strong><h4>ฝ่ายจัดซื้อ</h4></strong>
                      </div>
                      <div>
                      <Button type="primary">อนุมัติ</Button>
                  <Button type="danger">ไม่อนุมัติ</Button>
                  </div>
                  </div>
                    </CardHeader>
                  <div style={{padding: 10}}>
                    <Steps current={current}>
                    {stepsBuyer.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
                  </div>
                    <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Supplier Code</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="exampleEmail"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ชื่อ Supplier</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="exampleEmail"  />
                        </Col>
                        <Label for="exampleEmail" sm={1} >เงื่อนไขการชำระเงิน</Label>
                        <Col sm={1}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label sm={1} >วัน</Label>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="SortName" sm={1}>Sort Name</Label>
                        <Col sm={4}>
                          <Input type="SortName" name="SortName" id="SortName"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="address" sm={1}>ที่อยู่</Label>
                        <Col sm={11}>
                          <Input type="textarea" name="SortName" id="address"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="contact" sm={1}>ผู้ติดต่อ</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="contact"  />
                        </Col>
                        <Label for="tell" sm={1} >เบอร์โทรศัพท์</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="tell" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="email"  />
                        </Col>
                        <Label for="fax" sm={1} >เบอร์แฟกซ์</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="fax" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>ซุปเปอร์ไวเซอร์</Label>
                        <Col sm={4}>
                        <Select
                            value={selectedOption1}
                            onChange={this.handleChange1}
                            placeholder={'กรุณาเลือกบริษัท'}
                            options={options}
                          />
                        </Col>
                        <Label for="fax" sm={1} >ซุปเปอร์ไวเซอร์</Label>
                        <Col sm={2}>
                        <Select
                            value={selectedOption5}
                            onChange={this.handleChange5}
                            placeholder={'กรุณาเลือกซุปเปอร์ไวเซอร์'}
                            options={emp}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>ประธานกลุ่มสินค้า</Label>
                        <Col sm={4}>
                        <Select
                            value={selectedOption2}
                            onChange={this.handleChange2}
                            placeholder={'กรุณาเลือกบริษัท'}
                            options={options}
                          />
                        </Col>
                        <Label for="fax" sm={1} >ประธานกลุ่มสินค้า</Label>
                        <Col sm={2}>
                        <Select
                            value={selectedOption6}
                            onChange={this.handleChange6}
                            placeholder={'กรุณาเลือกประธานกลุ่มสินค้า'}
                            options={emp}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>ผู้จัดการฝ่าย</Label>
                        <Col sm={4}>
                        <Select
                            value={selectedOption3}
                            onChange={this.handleChange3}
                            placeholder={'กรุณาเลือกบริษัท'}
                            options={options}
                          />
                        </Col>
                        <Label for="fax" sm={1} >ผู้จัดการฝ่าย</Label>
                        <Col sm={2}>
                        <Select
                            value={selectedOption7}
                            onChange={this.handleChange7}
                            placeholder={'กรุณาเลือกผู้จัดการฝ่าย'}
                            options={emp}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>กรรมการผู้จัดการฝ่าย</Label>
                        <Col sm={4}>
                        <Select
                            value={selectedOption4}
                            onChange={this.handleChange4}
                            placeholder={'กรุณาเลือกกรรมการผู้จัดการฝ่าย'}
                            options={options}
                          />
                        </Col>
                        <Label for="fax" sm={1} >กรรมการผู้จัดการฝ่าย</Label>
                        <Col sm={2}>
                        <Select
                            value={selectedOption8}
                            onChange={this.handleChange8}
                            placeholder={'กรุณาเลือกกรรมการผู้จัดการฝ่าย'}
                            options={emp}
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                    <hr />
                    <div>รายละเอียด</div>
                    <br />
                    <EditableTable />
                    <hr />
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                    <Row>
                      <Col span={8}><Checkbox value="A">Supplier ที่ราคาถูกกวา</Checkbox></Col>
                      <Col span={8}><Checkbox value="B">Supplier ที่ราคาแพงกว่า แต่มีรายเดียว</Checkbox></Col>
                      <Col span={8}><Checkbox value="C">Supplier รายใหมเ่พิ่ม Itemใหม่</Checkbox></Col>
                      </Row> 
                      <Row>
                      <Col span={8}><Checkbox value="D">Supplier ที่ราคาแพงกว่า และมีมากกว่า 1 ราย</Checkbox></Col>
                      <Col span={8}><Checkbox value="E">Supplier รายใหม่เพิ่ม Itemใหม่ที่ฝ่ายอื่นหาให้ </Checkbox> 
                        <select>
                          <option >ก</option>
                          <option >ข</option>
                          <option >ค</option>
                          <option >ง</option>
                      </select>
                    </Col>
                      <Col span={8}><Checkbox value="E">Supplier ที่ฝ่ายอื่นหาให้</Checkbox>
                      <select>
                          <option >ก</option>
                          <option >ข</option>
                          <option >ค</option>
                          <option >ง</option>
                      </select>
                    </Col>
                    </Row>
  </Checkbox.Group>,
                  </CardBody>
                </Card>
            </TabPane>
          <TabPane tab="ฝ่ายบัญชีและการเงิน" key="2">              
          <Card style={{width:"100%"}}>
                    <CardHeader>
                      <strong><h4>ฝ่ายบัญชีและการเงิน</h4></strong>
                    </CardHeader>
                    <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Email</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Email</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Email</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
                </TabPane>
        </Tabs>,
           
            </div> 
         )
    }
}



















