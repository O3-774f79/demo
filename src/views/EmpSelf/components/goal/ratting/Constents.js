
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import TableRating from './TableRating'
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
      <div>
      <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmail">Ratting</Label>
              <Input name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
          <Label for="exampleSelect">Description</Label>
          <Input type="text" name="select" id="exampleSelect">
          </Input>
        </FormGroup>
          </Col>
        </Row>
      </Form>
      <hr />
       <TableRating />
      </div>
    )
  }
}

          