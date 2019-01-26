import React, { PureComponent } from 'react'
import { Card,Form,FormGroup,Label,Input, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox, Upload ,Select } from 'antd';
import PickerDate from '../../components/Datepicker/index'
import GeneralData from './GeneralData'
import Dimensions from './Dimensions'
import Unit from './Unitofmeasure'
import TextAdditional from './Text-(Additional Data)'
import SaleData from './SaleData'
import PurchasingData from './PurchasingData'
import MRP  from './MRP'
import PlantStorage from './Plant-Storage'
import Accounting from './Accounting'
import Costing from './Costing'
import WareHouse from './Warehouse'
const Step = Steps.Step;
const Option = Select.Option;
const steps = [{
  title: 'ผู้จัดทำ',
  status: 'finish',
  icon: <Icon style={{color:"green"}} type="user" />
}, {
  title: 'ผู้รับรอง',
  status: 'process',
  icon: <Icon type="user" />
}, {
  title: 'ผู้อนุมัติ',
  status: 'wait',
  icon: <Icon type="user" />
},{
    title: 'บัญชี',
    status: 'wait',
    icon: <Icon type="user" />
  },];


function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

export default class Index extends PureComponent {
  state = {
    current: 1,}
    render() {
        const { current } = this.state; 
         return(
            <div className="animated fadeIn">
                    <div><h2><b>Material Master Maintenance</b></h2></div>
            <hr></hr>
            <div style={{marginBottom: 10}}>
                    <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} status={item.status} icon={item.icon}/>)}
                    </Steps>
            </div>
            <Card>
              <CardHeader>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div>
                      <strong><h4>ใบขอสร้าง/แก้ไขข้อมูลหลักวัสดุ(Material Master Maintenance Form)</h4></strong>
                      </div>
                      <div>
                        <Button type="primary">ตกลง</Button>
                      </div>
                  </div>
              </CardHeader>
              <CardBody>
              <FormGroup row>
                        <Label for="exampleEmail" sm={1}>วัตถุประสงค์</Label>
                        <Col sm={8}>
                          <Input type="textarea" name="email" id="exampleEmail" />
                        </Col>                         
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>วันที่   ที่บัญชีรับเอกสาร</Label>
                        <Col sm={2}>
                          <PickerDate />
                        </Col>
                        <Label for="exampleEmail" sm={1} >วันที่   ดำเนินการในSAP</Label>
                        <Col sm={2}>
                          <PickerDate />
                        </Col>                        
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Industry Sector *</Label>
                        <Col sm={8}>
                          <Input type="textarea" name="email" id="exampleEmail" />
                        </Col>                         
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Material Type*</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Material number (ได้จากระบบSAP)</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                        
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Plant*</Label>
                        <Col sm={2}>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a plant"
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">all</Option>
                            <Option value="lucy">1200</Option>
                            <Option value="tom">2300</Option>
                            <Option value="tom">2301</Option>
                            <Option value="tom">2200</Option>
                        </Select>
                        </Col>
                        <Label for="exampleEmail" sm={1} >Batch Management*</Label>
                        <Col sm={2}>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select ..."
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">คุมBatch</Option>
                            <Option value="lucy">ไม่คุมBatch</Option>
                        </Select>
                        </Col>                        
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>วันที่ต้องการใช้</Label>
                        <Col sm={2}>
                          <PickerDate />
                        </Col>                      
                      </FormGroup>
                <GeneralData />
                <Dimensions />
                <Unit />
                <TextAdditional />
                <SaleData />
                <PurchasingData />
                <MRP />
                <PlantStorage />
                <Accounting />
                <Costing />
                <WareHouse />
            </CardBody>
            </Card>
            </div>  
         )
    }
}



















