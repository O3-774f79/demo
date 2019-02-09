import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class MRP extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="MRP (Planning)" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>MRP Group*</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>MRP Type*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >MRP Controller*</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Reorder point</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Lot size*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Minimum Lot Size</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Maximum Lot Size</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Fixed Lot Size</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Maximum Stock Level</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >Rounding Value</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >Procurement type*</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Planned Deliv. Time</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>SchedMargin key*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Safety Stock</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Coverage Profile</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Prod. Stor. Location</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>              
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Period Indicator</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Strategy group*</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Consumption mode</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Bwd consumption per.</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>               
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >Fwd consumption per.</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>    
                        <Label for="exampleEmail" sm={1}>Availability check*</Label>
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
