
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
const style = {
  cardContent: {
      display: 'flex',
      flexDirection: 'column',
  }
}
export default class Task extends PureComponent {
     render() {
          return(
            <Card
            style={{ width: 300 }}
            actions={[<div><Icon type="right-square" /><label>View Task</label></div>]}
          >
            <Meta
              title="Task"
              description={<div style={style.cardContent}>
              <label>0 Overdue tasks</label>
              <label>0 Tasks due today</label>
              </div>}
        />
          </Card>
          )
     }
}
          