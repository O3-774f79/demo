import React ,{PureComponent,Fragment} from 'react' 
import Timeoff from './CardTimeOff'
import PerformGoal from './Perfor-goal'
import Task from './Task'
import TotalSkill from './Totalskill'
import Accach from './Accach'
import Compen from './Compen'
export default class index extends PureComponent {
     render(){
          return(
            <div >
               <div style={{display: "flex",flexWrap: "wrap",marginBottom:5}}>
                <Timeoff />
                <PerformGoal />
                <Task />
                <TotalSkill />
                <Accach />
                <Compen />
                </div>
            </div>
          )
     }
}