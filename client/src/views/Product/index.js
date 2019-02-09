import React, { PureComponent } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox  } from 'antd';
import Upload from  './Upload'
import PickerDate from '../../components/Datepicker/index'
const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const steps = [{
  title: ' ผู้จัดการฝ่าย QA ',
  status: 'finish',
  icon: <Icon style={{color:"green"}}type="user" />
}, {
  title: 'ผู้จัดการฝ่าย QC',
  status: 'process',
  icon: <Icon type="user" />
}, {
  title: 'ผู้จัดการฝ่ายคลังสินค้า & จัดส่ง',
  status: 'wait',
  icon: <Icon type="user" />
}, {
  title: 'ผู้จัดการฝ่ายผลิต',
  status: 'wait',
  icon: <Icon type="user" />
}, {
  title: 'ผู้จัดการฝ่าย R&D',
  status: 'wait',
  icon: <Icon type="user" />
}];
const Req = [{
  title: 'ผู้ส่งตัวอย่างพร้อมเอกสารแนบ ',
  status: 'finish',
  icon: <Icon style={{color:"green"}} type="user" />
}, {
  title: 'ผู้ตรวจสอบเอกสาร',
  status: 'process',
  icon: <Icon type="user" />
},];
const ReqAudit = [{
  title: 'ชื่อผู้ทดสอบ ',
  status: 'finish',
  icon: <Icon style={{color:"green"}} type="user" />
}, {
  title: 'ผู้ตรวจสอบเอกสาร',
  status: 'process',
  icon: <Icon type="user" />
},{
  title: 'ชื่อพิจารณา(เจ้าหน้าที่ฝ่าย QA)  ',
  status: 'wait',
  icon: <Icon type="user" />
}, {
  title: 'ผู้อนุมัติ(ผู้จัดการฝ่าย QA)',
  status: 'wait',
  icon: <Icon type="user" />
},];
export default class Index extends PureComponent {
  state = {    current: 1,}
    render() {
      const { current } = this.state;
         return(
            <div className="animated fadeIn">
             <div><h2><b>ใบขอให้มี และ แจ้งผลการทดสอบสินค้าตัวอย่าง</b></h2></div>
            <hr></hr>
            <div style={{marginBottom: 10}}>
                    <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
            </div>
          <Tabs type="card">
            <TabPane tab="ใบขอให้มี" key="1">
            <div style={{marginBottom: 10}}>
                    <Steps current={current}>
                    {Req.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
            </div>
            <Card>      
              <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ใบขอให้มีการทดสอบสินค้าตัวอย่าง</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
              </CardHeader>
              <CardBody>     
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>หน่วยงานส่งตัวอย่างเพื่อทดสอบ</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" >Item Type</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" >Status</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ทดสอบเพื่อ</Label>
                        <Col sm={3}>
                          <Checkbox value="p">ทดสอบคุณภาพ / การนำไปใช้</Checkbox>
                        </Col>
                        {/* <Label for="exampleEmail" >Item Type</Label> */}
                        <Col sm={3}>
                          <Checkbox value="p"> เพื่อนำเข้าผลิตภัณฑ์ใหม่</Checkbox>
                        </Col>
                          <Checkbox value="p"> อื่นๆ</Checkbox>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ชื่อสินค้า</Label>
                        <Col sm={5}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" style={{marginRight:15}}>Item Code</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ชื่อบริษัทที่ส่งทดสอบ</Label>
                        <Col sm={5}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail">จำนวนตัวอย่าง</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ชื่อทางการค้า  (Supplier Item)</Label>
                        <Col sm={5}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail">รวมเอกสารแนบ</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />         
                        </Col>
                        <Label>แผ่น</Label>
                      </FormGroup>
                      <hr></hr>
                      <Label style={{marginBottom:10}}>เอกสารแนบประกอบการพิจารณา</Label>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Specification</Label>
                        <Col sm={2}>
                         <Upload />
                        </Col>
                        <Label for="exampleEmail" sm={1}>MSDS</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                        <Label for="exampleEmail" sm={1}>ผลการวิเคราะห์โลหะหนัก</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Halal (ไทย)</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                        <Label for="exampleEmail" sm={1}>COA</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Product Data Sheet</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>รูป Packaging</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Non-GMOs</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Flow Chart   การผลิต</Label>
                        <Col sm={2}>
                        <Upload />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ผลการตรวจวิเคราะห์โลหะหนัก</Label>                   
                        <Checkbox value="p" style={{marginLeft:8}}>มี</Checkbox>
                        <Checkbox value="p">ไม่มี</Checkbox>                       
                        <Label>เนื่องจาก</Label>
                        <Col sm={8}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>หนังสือรับรองมาตรฐาน</Label>                   
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>เพิ่มเติม</Label>                   
                        <Col sm={8}>
                        <Input type="textarea" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                  </Form>                
            </CardBody>
            </Card>
            </TabPane>
            <TabPane tab="แจ้งผลการทดสอบสินค้าตัวอย่าง" key="2">
            <div style={{marginBottom: 10}}>
                    <Steps current={current}>
                    {ReqAudit.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
            </div>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>หน่วยงานที่ทดสอบ</span>} key="1">
              <Card>      
              <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>หน่วยงานที่ทดสอบ</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
              </CardHeader>
              <CardBody>
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ฝ่าย </Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Col sm={3}></Col>
                        <Label for="exampleEmail" style={{marginRight:30}}>วันที่รับตัวอย่าง & เอกสารแนบ </Label>
                        <Col sm={2}>
                        <PickerDate />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>วันที่ทำการทดสอบ</Label>
                        <Col sm={3}>
                        <PickerDate />
                         
                        </Col>
                        <Col sm={3}></Col>
                        <Label for="exampleEmail" >วันที่ส่งผลการทดสอบกลับฝ่ายจัดซื้อ</Label>
                        <Col sm={2}>
                        <PickerDate />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} style={{marginRight:17}}>ผลการทดสอบ</Label>                   
                        <Checkbox value="p">มี</Checkbox>
                        <Checkbox value="p">ไม่มี</Checkbox>                       
                        <Label>เนื่องจาก</Label>
                        <Col sm={8}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ข้อเสนอแนะเพิ่มเติม</Label>                   
                        <Col sm={8}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                  </Form>
            </CardBody>
            </Card>
              </TabPane>
              <TabPane tab={<span>การพิจารณาหลักเกณฑ์ในการคัดเลือก วัตถุดิบ / สารเคมี / บรรจุภัณฑ์</span>} key="2">
              <Card>      
              <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>หน่วยงานที่ทดสอบ</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
              </CardHeader>
              <CardBody>
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail"sm={1}>Q1</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Q2.1</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Q2.2</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Q2.2</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>      
                      </FormGroup>

                        <FormGroup row>       
                        <Label for="exampleEmail" sm={1}>Q3</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>                 
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" style={{marginLeft: 10,marginRight: 5}}>กลุ่ม:</Label>                   
                        <Checkbox value="p">Critical</Checkbox>
                        <Checkbox value="p">Major</Checkbox> 
                        <Checkbox value="p">Minor</Checkbox>                       
                        <Checkbox value="p">Low</Checkbox> 
                        <Checkbox value="p">กลุ่มพิเศษ </Checkbox>                      
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" style={{marginLeft: 10,marginRight: 5}}>เกณฑ์พิจารณา:</Label>                  
                        <Checkbox value="p">Audit </Checkbox>
                        <Checkbox value="p">Questionnaire & Certificate </Checkbox>                    
                      </FormGroup>
                  </Form>
            </CardBody>
            </Card>
              </TabPane>
              <TabPane tab={<span>การสรุปของคณะกรรมการ ความปลอดภัยของอาหาร </span>} key="3">
              <Card>      
              <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>การสรุปของคณะกรรมการ ความปลอดภัยของอาหาร</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
              </CardHeader>
              <CardBody>
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail"sm={2}> วันที่เข้าประชุม / วันที่สรุป</Label>
                        <Col sm={3}>
                        <PickerDate />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail"sm={1}>ผลสรุป</Label>
                        <Col sm={12}>
                          <Input type="textarea" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                  </Form>
            </CardBody>
            </Card>
              </TabPane>
            </Tabs>
            </TabPane>
          </Tabs>,
            </div>  
         )
    }
}



















