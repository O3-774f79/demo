
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Card, Icon } from 'antd';

const { Meta } = Card;
const style = {
  cardContent: {
      display: 'flex',
      flexDirection: 'column',
  }
}
export default class Accach extends PureComponent {
     render() {
          return(
            <Card
            style={{ width: 300, marginRight:15, marginLeft:15, marginBottom:15,height:200 }}
          >
            <Meta
              title="Attachments"
              description={<div style={style.cardContent}>
                  <label style={{fontSize:50}}>0</label>
                  </div>}
            />
          </Card>
          )
     }
}
          