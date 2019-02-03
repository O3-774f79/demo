import React ,{PureComponent} from 'react' 
import 'antd/dist/antd.css';
import { Card, Icon } from 'antd';

const { Meta } = Card;
const style = {
  cardContent: {
      display: 'flex',
      flexDirection: 'column',
  }
}
export default class PerforGoal extends PureComponent {
    render() {
         return (
            <Card
            style={{ width: 300 }}
            actions={[<div><Icon type="right-square" /><label>View All Goal</label></div>]}
          >
            <Meta
              title="Performance Goal"
              description={<div style={style.cardContent}>
              <label>4 Not started</label>
              <label>3 On track</label>
              <label>0 Needs improvement</label>
              </div>}
        />
          </Card>
          )
     }
}