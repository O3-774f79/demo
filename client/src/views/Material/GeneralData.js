import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class GeneralData extends PureComponent {
    render(){
        return(
            <div>
            <Collapse  onChange={callback}>
              <Panel header="General Data (Basic Data 1)" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Description (EN) * 40 digits</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={2}>MaterialGroup *</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2} >Base Unit/หน่วยย่อย  * </Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                      
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={2} >Old material number</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={2}>ProductHierarchy</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" sm={2} >Division *</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <Label for="exampleEmail" sm={2}>GenItemCatGroup*</Label>
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
