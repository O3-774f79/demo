
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Select } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
              <Label for="exampleEmail">Measurement</Label>
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
    )
  }
}

          