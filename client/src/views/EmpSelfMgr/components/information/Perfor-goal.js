import React ,{PureComponent} from 'react' 
import 'antd/dist/antd.css';
import { Card, Icon,Modal } from 'antd';
import Md from '../../../MDratetable/List2'
const { Meta } = Card;
const style = {
  cardContent: {
      display: 'flex',
      flexDirection: 'column',
  }
}
export default class PerforGoal extends PureComponent {
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
            <Card
            style={{ width: 300, marginRight:15, marginLeft:15, marginBottom:15,height:200 }}
            actions={[<div onClick={this.showModal}><Icon type="right-square" /><label>View All Goal</label></div>]}
          >
            <Meta
              title="Performance Goal"
              description={<div style={style.cardContent}>
              <label>4 Not started</label>
              <label>3 On track</label>
              <label>0 Needs improvement</label>
              </div>}
        />
                <Modal
          title=" "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={800}
        >
         <Md />
        </Modal>
          </Card>
          )
     }
}