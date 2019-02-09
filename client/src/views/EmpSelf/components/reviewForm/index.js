import React, { PureComponent } from 'react'
import {Tabs} from 'antd'
import ReviewTemplate from './review-template'
import ReviewType from './review-types'
const TabPane = Tabs.TabPane

const callback = (key)=>{
     console.log(key)
}
export default class Index extends PureComponent {
     render(){
          return(
               <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Review Template" key="1"><ReviewTemplate /></TabPane>
                    <TabPane tab="Review Type" key="2"><ReviewType /></TabPane>
                </Tabs>,
               </div>
          )
     }
}