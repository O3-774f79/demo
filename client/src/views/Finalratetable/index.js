
import React ,{PureComponent} from 'react'
import { Modal, Button, } from 'antd';
import List3 from './List3';
export default class index extends PureComponent {

state = { visible: false,
          title1:"แบบประเมิณครั้งที่1" 
          }

     render() {
          return(

        <List3 />
          )
     }
}