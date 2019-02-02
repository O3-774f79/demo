import React, {PureComponent} from 'react'
import {Tabs} from 'antd'
import GoalCategory from './goal-category'
import GoalGroups from './goal-groups'
import Measurements from './measurements'
import GoalTemplate from './goal-template'
import PerformJournalSource from './performance-journal-source'
import performPeriod from './performance-period'

const TabPane = Tabs.TabPane
const callback = (key)=> {
      console.log(key)
}
export default class index extends PureComponent {
     render(){
          return(
              <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Goal Category" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Goal Groups" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Measurements" key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab="Goal Template" key="4">Content of Tab Pane 3</TabPane>
                    <TabPane tab="Performance Journal Source" key="5">Content of Tab Pane 3</TabPane>
                    <TabPane tab="Performance Period" key="6">Content of Tab Pane 3</TabPane>
                </Tabs>,
              </div>
          )
     }
}