import React, { PureComponent } from 'react'
import { Card,Form,FormGroup,Label,Input, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Steps, Button, message,Icon,Tabs,Checkbox, Upload  } from 'antd';
import TableItem from './EditableTable'
export default class Index extends PureComponent {
    render() {
         return(
            <div className="animated fadeIn">
            <Card>
              <CardHeader>
                <strong><h4>ใบเบิกสินค้ำย่อย</h4></strong>
              </CardHeader>
              <CardBody>
              <Form>
                      <FormGroup row>
                        <Label for="exampleEmail"sm={2}>จากหน่วยงาน</Label>
                        <Col sm={3}>
                          <Input type="email" name="email" id="exampleEmail" />
                        </Col>
                      </FormGroup>
                      <TableItem />
                  </Form>
            </CardBody>
            </Card>
            </div>  
         )
    }
}



















