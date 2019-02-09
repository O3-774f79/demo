
import React,{PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Tabs,Icon } from 'antd';
import Information from '../information'
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
const style = {
     iconFormat :{
        display:"flex",
        flexDirection: 'column',
     },
     iconText: {
        fontSize: 4
     },
     iconStyle:{
          fontSize: 30
     }  
    }
export default class Index extends PureComponent {
    start={
        displayContent:0
    }
     render() {
        return(
            <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab={<div style={style.iconFormat}><Icon style={style.iconStyle}type="user" /><label style={style.iconText}>Information</label></div>} key="1"><Information /></TabPane>
          </Tabs>
        )
     }
}     