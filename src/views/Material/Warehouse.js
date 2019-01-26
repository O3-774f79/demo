import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class Warehouse extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Warehouse Management Data (กรอกข้อมูลเฉพาะสินค้าที่เก็บใน WM)" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Warehouse No.*</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Picking Area</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                                 
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Placement IND*</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Removal IND*</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Section IND*</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Bulk IND*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                               
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Capacity Usage</Label>
                        <Col sm={1}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <label>Per</label>
                        <Col sm={1}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Allow addition to Stock</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>     
                        <Label for="exampleEmail" sm={1} >Qty per Pallet :P1 *</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                             
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Storage Type</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} ></Label>
                        <Col sm={2}>
                        {/* <Input type="email" name="email" id="exampleEmail" /> */}
                        </Col>     
                        <Label for="exampleEmail" sm={1} >Qty per Pallet : P2*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                             
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Maximum Bin Quantity</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Minimum Bin Quantity</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>     
                        <Label for="exampleEmail" sm={1} >Replenish Qty</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                             
                      </FormGroup>
                  </Form>
              </Panel>             
            </Collapse>
            </div>
        )
    }
}
