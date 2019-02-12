import React ,{PureComponent} from 'react'
import { Modal, Button, } from 'antd';
import List1 from './List1';
export default class index extends PureComponent {

state = { visible: false,
          title1:"รายการแบบประเมิณ" 
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

     render() {
          return(
               <div>
                    <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
        style={{marginLeft:"20%"}}
          width="70%"
          title={this.state.title1}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >

        <List1 />
        </Modal>

                    
              </div>
          )
     }
}