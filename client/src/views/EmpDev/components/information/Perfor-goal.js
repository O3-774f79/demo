import React ,{PureComponent} from 'react' 
import 'antd/dist/antd.css';
import { Card, Icon,Modal,Button } from 'antd';
import Emprate from '../../../EMPratetable/'
const { Meta } = Card;
const style = {
  cardContent: {
      display: 'flex',
      flexDirection: 'column',
  }
}

export default class PerforGoal extends PureComponent {
  state = { visible: false,
    title1:"แบบประเมิณครั้งที่1" 
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
      _onHandleClick = ()=>{
        this.setState({
          visible: true,
          });
      }
    render() {
         return (
            <Card
            style={{ width: 250, marginRight:15, marginLeft:15, marginBottom:15,height:200 }}
            actions={[<div onClick={this._onHandleClick}><Icon type="right-square" /><label>View All Goal</label></div>]}
          >
            <Meta
              title="Performance Goal"
              description={<div style={style.cardContent}>
              <label>3 Not started</label>
              <label>1 On track</label>
              <label>0 Needs improvement</label>
              </div>}
          />
             <Modal
        style={{marginLeft:"20%"}}
          width="70%"
          title={this.state.title1}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >

        <Emprate />
        </Modal>
          </Card>
       
          )
     }
}