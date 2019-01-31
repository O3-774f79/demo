import React ,{PureComponent} from 'react' 
import 'antd/dist/antd.css';
import { Card, Icon } from 'antd';

const { Meta } = Card;
export default class PerforGoal extends PureComponent {
    render() {
         return (
            <Card
            style={{ width: 300 }}
            actions={[<div><Icon type="right-square" /><label>View All Goal</label></div>]}
          >
            <Meta
              title="Performance Goal"
              description="This is the description"
            />
          </Card>
          )
     }
}