
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button } from 'antd';
import Contents from './Constents';
export default class Modals extends React.Component {
  state = {
    loading: false,
    visible: false,
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

  render() {
    const {  loading } = this.state;
    const { visibleParent,titleKey,titleName } =this.props
    return (
      <div>
        <Modal
          width	= {1000}
          style = {{left: 50}}
          visible={visibleParent}
          title={"New Ratting"}
          onOk={this.handleOk}
          onCancel={this.props.handleCancleShow}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
         <Contents />
        </Modal>
      </div>
    );
  }
}
const styles ={
    Modal: {
        width: '900px'
    }
}        