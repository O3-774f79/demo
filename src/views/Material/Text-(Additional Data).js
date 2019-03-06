import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class TextAdditional extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Text(Additional Data)" key="1">
              <Form>
                   <h6>Basic Data Text*</h6>
                      <FormGroup row>
                        <Label for="exampleEmail" style={{marginLeft:50}}>TH</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                      <Label for="exampleEmail" style={{marginLeft:50}}>EN</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <h6>Inspection Text*</h6>
                      <FormGroup row>
                        <Label for="exampleEmail" style={{marginLeft:50}}>TH</Label>
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
