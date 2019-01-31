
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class Task extends PureComponent {
     render() {
          return(
            <Card
            style={{ width: 300 }}
            actions={[<div><Icon type="right-square" /><label>View Task</label></div>]}
          >
            <Meta
              title="Task"
              description="This is the description"
            />
          </Card>
          )
     }
}
          