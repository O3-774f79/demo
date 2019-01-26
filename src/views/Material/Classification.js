import React, {PureComponent} from "react";
import "antd/dist/antd.css";
import { Col, Row, Form, FormGroup, Label, Input, Card, CardBody, CardHeader,FormText } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox,Collapse  } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}



export default class Classification extends PureComponent {
    render(){
        return(
            <div>
            <Collapse onChange={callback} style={{marginTop: 10}}>
              <Panel header="Classification (เฉพาะ Z10,Z20,Z30,Z31)" key="1">
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={1}>Classification*</Label>
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
