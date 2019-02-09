
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Steps, Icon } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import TableLink from './TableLink'
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
      <Panel header="General" key="1">
      <Form>
        <Row form>
          <Col md={7}>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="text" name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="examplePassword">Person</Label>
              <Input type="text" name="password" id="examplePassword"  />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Description</Label>
          <Input type="textarea" name="address" id="exampleAddress" />
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Journal date</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Source</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label for="ShereZip">Shere</Label>
              <CustomInput type="switch" id="ShereZipSwitch" name="ShereZip" label="" />
            </FormGroup>  
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="DeplartmentZip">Deplartment plan</Label>
              <CustomInput type="switch" id="DeplartmentZipSwitch" name="DeplartmentZip" label="" />
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleCity">Start date</Label>
              <DatePicker />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="DateComplate">Date Complate</Label>
              <DatePicker />           
          </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="Submitted">Submitted by</Label>
              <Input type="text" name="state" id="Submitted"/>
            </FormGroup>  
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="KeyWord">KeyWord</Label>
              <Input type="text" name="state" id="KeyWord"/>
            </FormGroup>  
          </Col>
        </Row>
      </Form>
      </Panel>
      <Panel header="Note" key="2">
      <FormGroup>
          <Label for="exampleText">Note</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Panel>
      <Panel header="Link" key="3" >
        <TableLink />
      </Panel>
      <Panel header="Attachments" key="4" >
      <Uploads />
      </Panel>
    </Collapse>
    </React.Fragment>
    )
  }
}

          