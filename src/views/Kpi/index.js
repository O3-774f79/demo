import React, { PureComponent } from 'react';
import KpiTable from './KpiTable'
import GoalTemplate from '../EmpSelf/components/goal/goal-template'
import 'antd/dist/antd.css';
import {
     Skeleton, Switch, Card, Icon, Avatar,
   } from 'antd';
   
   const { Meta } = Card;
export default class index extends PureComponent {
     state={
          TableLevel:"ผู้ปฏิบัติงาน"
     }
     render() {
          return(
               <React.Fragment>
             <Card
                    style={styles.CardEmp}>
                    <Skeleton loading={false} avatar active>
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Ananchai Phahupongsub"
                    description={<div><label>Level :</label><label>{this.state.TableLevel}</label></div>}
                    />
                    </Skeleton>
               </Card>
             <Card style={styles.Card}>
               <KpiTable TableLavel={this.state.TableLevel}/>
             </Card>
             </React.Fragment>
          )
     }
}
const styles = {
      Card:{
          width: '100%',
          marginTop:10,
      },
      CardEmp:{
          width: "40%",  
          marginTop:10,
      }
}