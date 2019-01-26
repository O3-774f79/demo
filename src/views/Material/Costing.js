import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class Costing extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Costing Data" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>With Qty Structure</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Planned price 1</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Do not cost</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                                   
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Material origin</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1}>Planned price Date 1</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Origin group</Label>
                        <Col sm={2}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >Alternative BOM</Label>
                        <Col sm={2}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={1} >BOM Usage</Label>
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
