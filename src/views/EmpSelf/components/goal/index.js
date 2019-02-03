import React, {PureComponent} from 'react'
import {Tabs} from 'antd'
import GoalCategory from './goal-category'
import GoalGroups from './goal-groups'
import Measurements from './measurements'
import GoalTemplate from './goal-template'
import PerformJournalSource from './performance-journal-source'
import PerformPeriod from './performance-period'
import Ratting from './ratting'

const TabPane = Tabs.TabPane
const callback = (key)=> {
      console.log(key)
}
export default class index extends PureComponent {
     render(){
          return(
              <div>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Goal Category" key="1"><GoalCategory /></TabPane>
                    <TabPane tab="Goal Groups" key="2"><GoalGroups /></TabPane>
                    <TabPane tab="Measurements" key="3"><Measurements /></TabPane>
                    <TabPane tab="Goal Template" key="4"><GoalTemplate /></TabPane>
                    <TabPane tab="Performance Period" key="5"><PerformPeriod /></TabPane>
                    <TabPane tab="Rating" key="6"><Ratting /></TabPane>
                </Tabs>,
              </div>
          )
     }
}