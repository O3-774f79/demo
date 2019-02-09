import React, { PureComponent } from 'react'
import {Tabs} from 'antd'
import Skill from './skill'
import SkillType from './skill-type'
import TestType from './test-type'
import Certificate from './certificate'
const TabPane = Tabs.TabPane
const callback = (key)=>{
    console.log(key)
}
export default class Index extends PureComponent { 
    render(){
         return(
              <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Skill" key="1"><Skill /></TabPane>
                    <TabPane tab="Skill type" key="2"><SkillType /></TabPane>
                    <TabPane tab="Test Type" key="3"><TestType /></TabPane>
                    <TabPane tab="Certificate" key="4"><Certificate /></TabPane>
                </Tabs>,
              </div>
         )
    }
}