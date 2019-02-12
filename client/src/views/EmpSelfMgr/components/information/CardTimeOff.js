
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
export default class Timeoff extends PureComponent {
     render() {
          return(
            <Card
            style={{ width: 300, marginRight:15, marginLeft:15, marginBottom:15,height:240 }}
            // actions={[<div><Icon type="right-square" /><label>Request time off</label></div>]}
          >
            <Meta
              title="Time off Balances"
              description={<div style={style.cardContent}>
                  <label >PTO</label>
                  <label>87.76  hours</label>
                  <label >Sick</label>
                  <label>56.06  hours</label>
                  </div>}
            />
          </Card>
          )
     }
}
          