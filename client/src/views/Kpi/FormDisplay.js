
import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button,Collapse,DatePicker,Steps,Icon} from 'antd';
import { Col, Row, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import moment from 'moment';
import Measurements from './Meaturement'
import Activities from './Activity'
const Panel = Collapse.Panel;
const Step = Steps.Step;
const dateFormat = 'DD/MM/YYYY';
export default class FormDisplay extends React.Component {
  state = {
    loading: false,
    visible: false,
    dataMea: []
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }
  componentDidMount(){
    this.setState({dataMea:this.props.record.dataType})
    console.log(this.props.record.dataType)
  }
  render() {
    return (
      <div>
                <Collapse defaultActiveKey={['1']}>
                <Panel header="General" key="1" style={{backgroundColor:"#ccd9ff"}}>
                <Form>
                    <Row form>
                    <Col md={7}>
                        <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="email" id="exampleEmail" value={this.props.record.Name} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                    <Label for="exampleAddress">Overview</Label>
                    <Input type="textarea" name="address" id="exampleAddress" />
                    </FormGroup>
                    <Row form>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="exampleCity">Level</Label>
                        <Input type="text" name="city" id="exampleCity" value={this.props.TableLevel}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="exampleState">Goal Category</Label>
                        <Input type="text" name="state" id="exampleState" value={this.props.record.GoalCatagory}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="ShereZip">Status</Label>
                        <Input type="text" name="ShereZip" id="ShereZip" value={this.props.record.Status}/>
                        </FormGroup>  
                    </Col>
                    </Row>
                    <Row form>
                    <Col md={3}>
                        <FormGroup>
                        <Label for="exampleCity">Start date</Label>
                        <DatePicker defaultValue={moment(this.props.record.StartDate,'DD/MM/YYYY')}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                        <Label for="DateComplate">End date</Label>
                        <DatePicker defaultValue={moment(this.props.record.EndDate,'DD/MM/YYYY')}/>
                    </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                        <Label for="DateFinish">Date finish</Label>
                        <DatePicker />           
                    </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                        <Label for="Submitted">Percent complate</Label>
                        <Input type="text" name="state" id="Submitted"/>
                        </FormGroup>  
                    </Col>
                    </Row>
                </Form>
                </Panel>
                <Panel header="Measurements" key="2">
                <Measurements dataMea={this.state.dataMea}/>
                </Panel>
                <Panel header="Activities" key="3" >
                <Activities />
                </Panel>
                </Collapse>
        
      </div>
    );
  }
}
const styles ={
    Modal: {
        width: '900px'
    }
}        