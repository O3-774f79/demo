import React ,{PureComponent,Fragment} from 'react' 
import Timeoff from './CardTimeOff'
import PerformGoal from './Perfor-goal'
import Task from './Task'
import TotalSkill from './Totalskill'
export default class index extends PureComponent {
     render(){
          return(
            <div >
               <div style={{display: "flex",justifyContent:"space-between",marginBottom:5}}>
                <Timeoff />
                <PerformGoal />
                <Task />
                </div>
                <div>
                <TotalSkill />
                </div>
            </div>
          )
     }
}