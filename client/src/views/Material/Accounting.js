import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class Accounting extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Accounting Data" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Price Control*</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Price per Unit</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                                 
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Profit Center*</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Valuation Class*</Label>
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
