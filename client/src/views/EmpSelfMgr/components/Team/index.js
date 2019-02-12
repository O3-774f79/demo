
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import {  Tabs,Card, Icon, Avatar,Modal } from 'antd';
import Tables from './Tables'
import NodeTrees from './NodeTrees'

const TabPane = Tabs.TabPane;
const { Meta } = Card;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
  backgroundColor: '#D0B3E1',
  cursor: 'pointer',
  size: 18
};
export default class Index extends PureComponent {
  state = { visible: false,visible2:false }
  onhandleModal= ()=> {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  onhandleClickTree = () => {
    console.log("te")
    this.setState({
      visible2: true,
    });
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }
     render() {
         return(
            <div style={{padding: '30px' }}>
            <Card >
              <Card.Grid style={gridStyle} onClick={this.onhandleModal}>Team Performance Journal</Card.Grid>
              <Card.Grid style={gridStyle}>Team Performance Goals</Card.Grid>
              <Card.Grid style={gridStyle}>Team Performance Reviews</Card.Grid>
              <Card.Grid style={gridStyle}>Open Positions</Card.Grid>
             
            </Card>
            <Modal
          title="Performance Journal"
          visible={this.state.visible}
          width= {800}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Tables />
        </Modal>
            <Tabs>
              <TabPane tab="Summary" key="1">
              <div style={{display: "flex",flexWrap:"wrap"}}>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }} 
                actions={[<Icon type="team" style={{cursor:"pointer"}} onClick={this.onhandleClickTree}/>]}
                >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ1 ทดสอบ1"
                  description={
                  <div>
                  <label>Marketing Manager</label>
                  <br />
                  <label>Sales & Marketing</label>
                  </div>
                  }
                />
              </Card>
              <Modal
          visible={this.state.visible2}
          width= {800}
          onCancel={this.handleCancel2}
          footer={null}
        >
       <NodeTrees />  
       {/* <Tables /> */}
        </Modal>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ2 ทดสอบ2"
                  description={
                    <div>
                    <label>Sales Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    </div>
                    }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ3 ทดสอบ3"
                  description={
                    <div>
                    <label>Sales Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    </div>
                    }
                />
              </Card>
              </div>
              </TabPane>
              <TabPane tab="Position" key="2">
              <div style={{display: "flex",flexWrap:"wrap"}}>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ1 ทดสอบ1"
                  description={
                  <div>
                  <label>Marketing Manager</label>
                  <br />
                  <label>Sales & Marketing</label>
                  <hr/>
                  <label>Years in position: 12.9</label>
                  <br />
                  <label>Years of service: 12.9</label>
                  <br />
                  <label>Number of previous positions: 0</label>               
                  </div>
                  }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ2 ทดสอบ2"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Years in position: 6.9</label>
                    <br />
                    <label>Years of service: 5.1</label>
                    <br />
                    <label>Number of previous positions: 1</label>               
                    </div>
                    }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ3 ทดสอบ3"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Years in position: 12.7</label>
                    <br />
                    <label>Years of service: 12.7</label>
                    <br />
                    <label>Number of previous positions: 0</label>               
                    </div>
                    }
                />
              </Card>
              </div>
              </TabPane>
              <TabPane tab="Compensation" key="3">
              <div style={{display: "flex",flexWrap:"wrap"}}>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ1 ทดสอบ1"
                  description={
                  <div>
                  <label>Marketing Manager</label>
                  <br />
                  <label>Sales & Marketing</label>
                  <hr/>
                  <label>Annual salary: 68,310.00</label>
                  <br />
                  <label>Last increase amount: 3,160.00</label>
                  <br />
                  <label>Last increase percent: 4.85</label>               
                  </div>
                  }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ2 ทดสอบ2"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Annual salary: 84,300.00</label>
                    <br />
                    <label>Last increase amount: 2,300.00</label>
                    <br />
                    <label>Last increase percent: 2.80</label>               
                    </div>
                    }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ3 ทดสอบ3"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Top balances with activity</label>
                    <br />
                    <label>PTO: 0.00 hours</label>
                    <br />
                    <label>Sick: 0.00 hours</label>               
                    </div>
                    }
                />
              </Card>
              </div>
              </TabPane>
              <TabPane tab="Leave and absence" key="4">
              <div style={{display: "flex",flexWrap:"wrap"}}>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ1 ทดสอบ1"
                  description={
                  <div>
                  <label>Marketing Manager</label>
                  <br />
                  <label>Sales & Marketing</label>
                  <hr/>
                  <label>Top balances with activity</label>
                    <br />
                    <label>PTO: 32.00 hours</label>
                    <br />
                    <label>Sick: 34.82 hourss</label>               
                    </div>
                  }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ2 ทดสอบ2"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Top balances with activity</label>
                    <br />
                    <label>PTO: 147.76 hours</label>
                    <br />
                    <label>Sick: 68.00 hours</label>               
                    </div>
                    }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ3 ทดสอบ3"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Annual salary: 94,815.00</label>
                    <br />
                    <label>Last increase amount: 4,515.00</label>
                    <br />
                    <label>Last increase percent: 5.00</label>               
                    </div>
                    }
                />
              </Card>
              </div>
              </TabPane>
              <TabPane tab="Performance goal" key="5">
              <div style={{display: "flex",flexWrap:"wrap"}}>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ1 ทดสอบ1"
                  description={
                  <div>
                  <label>Marketing Manager</label>
                  <br />
                  <label>Sales & Marketing</label>
                  <hr/>
                    <label>Not started: 1</label>
                    <br />
                    <label>On track: 1</label>             
                    </div>
                  }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ2 ทดสอบ2"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Not started: 2</label>
                    <br />
                    <label>On track: 1</label>             
                    </div>
                    }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ3 ทดสอบ3"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>Not started: 1</label>
                    <br />
                    <label>On track: 2</label>             
                    </div>
                    }
                />
              </Card>
              </div>
              </TabPane>
              <TabPane tab="Review" key="6">
              <div style={{display: "flex",flexWrap:"wrap"}}>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ1 ทดสอบ1"
                  description={
                  <div>
                  <label>Marketing Manager</label>
                  <br />
                  <label>Sales & Marketing</label>
                  <hr/>
                    <label>In progress: 1</label>
                    <br />
                    <label>Ready for review: 1</label>             
                    </div>
                  }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ2 ทดสอบ2"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>In progress: 2</label>
                    <br />
                    <label>Ready for review: 1</label>             
                    </div>
                    }
                />
              </Card>
              <Card style={{ width: 300, marginTop: 16,marginLeft:15,marginRight:15 }}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="นาย ทดสอบ3 ทดสอบ3"
                  description={
                    <div>
                    <label>Sale Manager</label>
                    <br />
                    <label>Sales & Marketing</label>
                    <hr/>
                    <label>In progress: 1</label>
                    <br />
                    <label>Ready for review: 2</label>             
                    </div>
                    }
                />
              </Card>
              </div>
              </TabPane>              
            </Tabs>
          </div>
         )
     }
}
          