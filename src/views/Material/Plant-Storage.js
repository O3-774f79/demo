import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class PlanStorage extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Plan&Storage Data" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Storage Location</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1} >Min. Rem. Shelf Life *</Label>
                        <Col sm={3}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>                    
                      <Label for="exampleEmail" sm={1} >Total shelf life*</Label>
                        <Col sm={1}>
                        <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                        <label>days</label>                   
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Time Unit</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Stock Determination</Label>
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
