
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Select,Steps, Icon } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Step = Steps.Step;
const Panel = Collapse.Panel;
const Option = Select.Option;
function callback(key) {
  console.log(key);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}
export default class  Contents  extends PureComponent{
  state = {
    select: 0
  }
  handleChange(value) {
    console.log(`selected ${value}`);
    this.setState({select:value})
  
  }
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
        
      <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmail">Measurement</Label>
              <Input name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
          <Label for="exampleSelect">Measurement Type</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Amount</option>
            <option>Date</option>
          </Input>
        </FormGroup>
          </Col>
        </Row>
      </Form>
      </React.Fragment>
    )
  }
}

          