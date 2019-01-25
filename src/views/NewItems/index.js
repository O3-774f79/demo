import React, { PureComponent } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader, FormText } from 'reactstrap';
import 'antd/dist/antd.css';
import './index.css';
import { Steps, Button, message, Icon, Tabs, Checkbox } from 'antd';
import Select from 'react-select';
import UploadItem from './Upload'
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
  title: 'ฝ่ายการตลาด',
  status: 'finish',
  icon: <Icon type="user" />
}, {
  title: 'ฝ่ายบัญชีและการเงิน',
  status: 'process',
  icon: <Icon type="loading" />
}, {
  title: 'ฝ่ายR&D',
  status: 'wait',
  icon: <Icon type="user" />
},
{
  title: 'ฝ่ายวางแผนการผลิต',
  status: 'wait',
  icon: <Icon type="user" />
}];
const stepsBuyer = [{
  title: 'Requested',
  status: 'finish',
  icon: <Icon type="user" />
},
{
  title: 'Approver',
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
    const { current, selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5, selectedOption6, selectedOption7, selectedOption8 } = this.state;
    return (
      <div className="animated fadeIn">
        <div><h2><b>NEW ITEM NUMBER : MANUFACTURED ITEM</b></h2></div>
        <hr></hr>
        <div style={{ marginBottom: 10 }}>
          <Steps current={current}>
            {stepsBuyer.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon} />)}
          </Steps>
        </div>
        <Tabs onChange={callback} type="card">
        <div style={{ padding: 10 }}>
                    <Steps current={current}>
                      {steps.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon} />)}
                    </Steps>
                  </div>
          <TabPane tab="ฝ่ายการตลาด" key="1">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>ฝ่ายการตลาด</span>} key="1">
   
                <Card style={{ width: "100%", marginBottom: 100 }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ฝ่ายการตลาด</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}> Item Number</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" >UM</Label>
                        <Col sm={1}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="address" sm={1}>Description</Label>
                        <Col sm={11}>
                          <Input type="textarea" name="SortName" id="address" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="contact" sm={1}>Prod. Brand </Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="contact" />
                        </Col>
                        <Label for="tell" sm={1} >(ตราผลิตภัณฑ์)</Label>
                        <Col sm={2}>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}> Alternate UM</Label>
                        <Col sm={1}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                        <Label for="email" sm={1}>(หน่วยขาย)</Label>
                        <Label for="fax" sm={1} >Conversion</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="fax" />
                        </Col>
                        <Label for="fax" sm={2} >(จำนวนสินค้า: หน่วยขาย)</Label>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>Barcode หน่วยขาย</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>Barcode แพค</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>Barcode ลังบรรจุ</Label>
                        <Col sm={4}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="email" sm={1}>Effective Date</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                        <Label for="fax" sm={1} >Safety Stock</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="fax" />
                        </Col>
                        <Label for="fax" sm={2} >(FG Product)</Label>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="email" sm={1}>Requested by</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                        <Label for="fax" sm={1} >Department</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="fax" />
                        </Col>
                        <Label for="fax" sm={1} >Date</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="fax" />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="email" sm={1}>Approved by</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="email" />
                        </Col>
                        <Label for="fax" sm={1} ></Label>
                        <Col sm={2}>

                        </Col>
                        <Label for="fax" sm={1} >Date</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="fax" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>Unit of Measure Maintenance</span>} key="2">
                <Card style={{ width: "100%", marginBottom: 100 }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>เพื่อการหนดการแปลงหน่วยสำหรับการขาย </h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Unit of Measure</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" >Alternate UM </Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" >UM Conversion</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="่ฝ่ายบัญชีและการเงิน" key="2">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>ข้อมูลเบื้องต้นการจัดการทางด้านบัญชีต้นทุน</span>} key="1">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ฝ่ายบัญชีและการเงิน</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Prod.Line</Label>
                        <Col sm={2}>
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
                        <Label for="exampleEmail" >Group</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>การคำนวณต้นทุนของสินค้ากึ่งสำเร็จรูป หรือ สินค้าสำเร็จรูป Roll-Up Cost</span>} key="2">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>การคำนวณต้นทุนของสินค้ากึ่งสำเร็จรูป หรือ สินค้าสำเร็จรูป Roll-Up Cost</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col span={8}><Checkbox value="A">14.13.13 Routing Cost Roll-Up</Checkbox></Col>
                      <Col span={8}><Checkbox value="B">13.12.13 Product Structure Cost Roll-Up</Checkbox></Col>
                      <Col span={8}><Checkbox value="C">13.12.14 Cumulative Lead Time Roll-Up</Checkbox></Col>
                    </Row>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>ตรวจสอบข้อมูลและแก้ไขItem Status</span>} key="3">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ตรวจสอบข้อมูลและแก้ไขItem Status</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col sm={2}>
                        <Checkbox value="z">ข้อมูลถูกต้อง</Checkbox></Col>
                      <Label for="exampleEmail" >แก้ไข</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label for="exampleEmail" >Item Status</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                    </Row>


                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>บันทึกข้อมูลครบถ้วน (เก็บใบ Input Form New Item Number ที่ฝ่าย บัญชีและการเงิน) </span>} key="4">
                <CardHeader>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <strong><h4>บันทึกข้อมูลครบถ้วน (เก็บใบ Input Form New Item Number ที่ฝ่าย บัญชีและการเงิน)</h4></strong>
                    </div>
                    <div>
                      <Button type="primary">ตกลง</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                      <Button type="primary">ดูเอกสาร</Button>
                    </div>
                  </div>
                </CardBody>
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="ฝ่าย R&D" key="3">

            <Tabs defaultActiveKey="1">
              <TabPane tab={<span> น้าหนักสินค้า</span>} key="1">

                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ฝ่าย R&D</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}> SEMI Item No</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}> Volume</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> UM</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label>(น้ำหนักสุทธิต่อหน่วยขายไม่รวม Package)</Label>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Shelf Life</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span> การจัดการสูตรการผลิต</span>} key="2">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ฝ่าย R&D</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col sm={2}>
                        <Checkbox value="A">Yes</Checkbox>
                      </Col>
                    </Row>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={1}><Checkbox value="A">No</Checkbox></Label>
                      <Label for="exampleEmail" >สาเหตุ</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={1}>ส่งรายงานให้แผนก/ฝ่าย</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                    </FormGroup>
                    แนบเอกสาร
                      <UploadItem />
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>เพื่อกำหนดการแปลงหน่วย Work In Process</span>} key="3">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>เพื่อกำหนดการแปลงหน่วย Work In Process</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}> Unit of Measure</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> Alternate UM</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>UM Conversion</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>Item Data เพื่อทำการกำหนด Reference ของการผลิต</span>} key="4">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>Item Data เพื่อทำการกำหนด Reference ของการผลิต</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Rev</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Promo Group</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>ข้อมูลทางด้านการควบคุมสินค้าคงคล้งและจ้ดส่ง</span>} key="5">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>ข้อมูลทางด้านการควบคุมสินค้าคงคล้งและจ้ดส่ง</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}> Lot/Serial Control</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> Site</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Location</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                    <Row>
                      <Col span={8}><Checkbox value="s">สารผสม ฝ่าย R&D</Checkbox></Col>
                      <Col span={8}><Checkbox value="d">WIP/SEMI ฝ่ายผลิต</Checkbox></Col>
                      <Col span={8}><Checkbox value="f"> FG ฝ่าย WH0</Checkbox></Col>
                    </Row>
                    <hr></hr>
                    ส่วนน้าหนักในการส่งสินค้า (FG Product)
                      <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Net Weight</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>UM</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail">(Ship Weight / จำนวนสินค้าต่อหน่วยขาย)</Label>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Ship Weight</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>UM</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail">(น้ำหนักรวม : หน่วยขาย)</Label>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </TabPane>
              <TabPane tab={<span>การจัดสถานะสินค้า</span>} key="6">
                <Card style={{ width: "100%" }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <strong><h4>การจัดสถานะสินค้า</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>WO Receipt Status</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> Active </Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail">(เฉพาะที่เป็น ITEM Finish Good)</Label>

                      </FormGroup>
                    </Form>
                    <Row>
                      <Col span={8}><Checkbox value="s">ตรวจสอบข้อมูลถูกต้องตามเอกสาร</Checkbox></Col>
                    </Row>
                  </CardBody>
                </Card>
              </TabPane>
            </Tabs>

          </TabPane>


          <TabPane tab="ฝ่ายวางแผนการผลิต" key="4">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>Item Planning Data ข้อมูล ที่ใช้ในการวางแผนผลิต</span>} key="1">
              <Card style={{ width: "100%" }}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong><h4>Item Planning Data ข้อมูล ที่ใช้ในการวางแผนผลิต</h4></strong>
                  </div>
                  <div>
                    <Button type="primary">ตกลง</Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}> Buyer / Planner</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> Pur LT</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Max Ord</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>PO Site</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> Min Ord</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>ราคาต่อหน่วย</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Master Sched </Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}> Pur / Mfg</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Plan Orders</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Ins LT</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Order Policy</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Mfg LT</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Inspect</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Order Qty</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Safety Time </Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Ord Mult</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Order Period</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Safety Stock</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>% Yield </Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
            </Card>
    </TabPane>
              <TabPane tab={<span>ข้อมูลทางด้านการควบคุมสินค้าคงคลัง</span>} key="2">
              <Card style={{ width: "100%" }}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong><h4>ข้อมูลทางด้านการควบคุมสินค้าคงคลัง</h4></strong>
                  </div>
                  <div>
                    <Button type="primary">ตกลง</Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
              <Form>
              <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Drawing</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Size</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Drawing Loc</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                    </Form>
                    <Row>
                      <Col sm={2}><Checkbox value="p">WIP/SEMI ฝ่ายผลิต</Checkbox></Col>
                      <Col sm={2}><Checkbox value="m">FG ฝ่ายWH0</Checkbox></Col>
                    </Row>
              </CardBody>
            </Card>
    </TabPane>
    <TabPane tab={<span>ข้อมูลกระบวนการผลิต</span>} key="3">
    <Card style={{ width: "100%" }}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <strong><h4>ข้อมูลกระบวนการผลิต</h4></strong>
                  </div>
                  <div>
                    <Button type="primary">ตกลง</Button>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                    <Row>
                      <Col sm={2}>
                        <Checkbox value="A">Yes</Checkbox>
                      </Col>
                    </Row>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={1}><Checkbox value="A">No</Checkbox></Label>
                      <Label for="exampleEmail" >สาเหตุ</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label>(อาจเป็น Item ซื้อมาขายไป)</Label>
                    </FormGroup>
                    <hr></hr>
                    <Label for="exampleEmail" sm={3}>ส่งรายงานให้แผนก/ฝ่าย</Label>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={1}>ต้นทุน</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label for="exampleEmail" sm={1}>วันที่</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                    </FormGroup>
                    แนบเอกสาร
                      <UploadItem />
                      <hr></hr>
                      Production Line (เพิ่ม)
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1}>Production line</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label for="exampleEmail">Primary</Label>
                      <Label for="exampleEmail" sm={1}>Yes</Label>
                      <Label for="exampleEmail" sm={1}>Start Date</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label for="exampleEmail">Unit Per Hours</Label>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={1}>Production line</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label for="exampleEmail">Primary</Label>
                      <Label for="exampleEmail" sm={1}>No</Label>
                      <Label for="exampleEmail" sm={1}>Start Date</Label>
                      <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                      </Col>
                      <Label for="exampleEmail">Unit Per Hours</Label>
                    </FormGroup>
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



















