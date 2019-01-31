
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class Timeoff extends PureComponent {
     render() {
          return(
            <Card
            style={{ width: 300 }}
            actions={[<div><Icon type="right-square" /><label>Request time off</label></div>]}
          >
            <Meta
              title="Time Off Balances"
              description="This is the description"
            />
          </Card>
          )
     }
}
          