import React ,{PureComponent} from 'react'
import { Modal, Button, } from 'antd';
import List3 from './List3';
import Finaltable from './Finaltable';

export default class Buttonmodal3 extends PureComponent {

state = { visible: false,recordSelect:null
          }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
componentDidMount(){
  this.setState({recordSelect:this.props.record})
}
     render() {
          return(
               <div>
                    <Button type="primary" onClick={this.showModal}>
                    Open
                  </Button>
                    <Modal
                    style={{marginLeft:"20%"}}
                      width="70%"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >

                    <Finaltable recordSelect={this.state.recordSelect}/>
                    </Modal>                
              </div>
          )
     }
}