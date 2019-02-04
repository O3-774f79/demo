
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
            style={{ width: 300, marginRight:15, marginLeft:15, marginBottom:15,height:280 }}
            actions={[<div><Icon type="right-square" /><label>Attachments</label></div>]}
          >
            <Meta
              title="Accachment"
              description={<div style={style.cardContent}>
                  <label >Compensation</label>
                  <label >50,000 บาท</label>
                  <hr />
                  <label >Last increase amount</label>
                  <label >9,700 บาท</label>
                  </div>}
            />
          </Card>
          )
     }
}
          