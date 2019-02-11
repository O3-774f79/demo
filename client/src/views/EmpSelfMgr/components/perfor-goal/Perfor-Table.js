
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button } from 'antd';
import PGTable from './PGTable'
export default class PerformanceTable extends PureComponent {
  state = { visible: false }

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
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
         Performance  Goals
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <PGTable />
        </Modal>
      </div>
    );
  }
}

          