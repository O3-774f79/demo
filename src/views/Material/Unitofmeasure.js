import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class Unitofmeasure extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Unit of measure (Additional Data)" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>ML-Millilite</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Pac-Pack</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >CRR-Carrier</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>  
                        <Label for="exampleEmail" sm={1} >CAR-Standard Carton</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={1} >9LC-9 L Case</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >PAL-Pallet</Label>
                        <Col sm={3}>
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
