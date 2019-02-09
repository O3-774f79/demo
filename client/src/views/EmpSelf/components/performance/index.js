import React, { PureComponent } from 'react'
import {Tabs} from 'antd'
import Performance from './performance-journal'
import Goal from './goals'
import Review from './reviews'
const TabPane = Tabs.TabPane
const callback = (key)=>{
    console.log(key)
}
export default class Index extends PureComponent { 
    render(){
         return(
              <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Performance" key="1"><Performance /></TabPane>
                    <TabPane tab="Goal" key="2"><Goal /></TabPane>
                    <TabPane tab="Review" key="3"><Review /></TabPane>
                </Tabs>,
              </div>
         )
    }
}