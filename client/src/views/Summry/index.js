import React ,{PureComponent} from 'react'
import Tables from './Tables'
import Showtable from './Showtable';
export default class index extends PureComponent {


     render() {
          return(
               <div>
              <Tables ValuesTest={"B"} />

              <Showtable />
              </div>
          )
     }
}