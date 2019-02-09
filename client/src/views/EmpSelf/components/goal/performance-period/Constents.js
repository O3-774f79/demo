
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
        <Label for="exampleEmail" sm={2}>Measurement</Label>
          <Col md={2}>
            <FormGroup>
              <Input name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleEmail">Start date</Label>
              <DatePicker />
            </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
          <Label for="exampleSelect">End date</Label>
          <DatePicker />
        </FormGroup>
          </Col>
        </Row>
      </Form>
      </React.Fragment>
    )
  }
}

          