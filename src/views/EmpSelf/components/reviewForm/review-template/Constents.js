
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Steps, Icon } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import TableLink from './TableLink'
import TableLink2 from './TableLink2'
import TableLink3 from './TableLink3'
import TableLink4 from './TableLink4'

import Uploads from './Uploads'
const Panel = Collapse.Panel;
const Step = Steps.Step;

function callback(key) {
  console.log(key);
}
export default class  Contents  extends PureComponent{
  render(){
    return(
      <React.Fragment>
              <Steps style={{marginBottom: 10}}>
              <Step
                style={{ color: "#00ff00" }}
                status="finish"
                title="User"
                icon={<Icon type="user" />}
              />
              <Step status="wait" title="Review" icon={<Icon type="solution" />} />
              <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>

      <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="Review Template" key="1">
      <Form>
        <Row form>
          <Col md={7}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input type="text" name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmail">Status</Label>
              <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Overview</Label>
          <Input type="textarea" name="address" id="exampleAddress" />
        </FormGroup>
      </Form>
      </Panel>
      <Panel header="Measurements" key="2">
      <TableLink />
      </Panel>
      <Panel header="Activities" key="3" >
      <TableLink2 />
      </Panel>
      <Panel header="Goals" key="4" >
      <TableLink3 />
      </Panel>
      <Panel header="Competencies" key="5" >
      <TableLink4 />
      </Panel>
    </Collapse>
    </React.Fragment>
    )
  }
}

          