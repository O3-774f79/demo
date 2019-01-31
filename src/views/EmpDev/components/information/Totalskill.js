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
export default class Totalskill extends PureComponent {
    render() {
         return (
            <Card
            style={{ width: 300 }}
            actions={[<div><Icon type="plus" /><label>Add more skills</label></div>]}
          >
            <Meta
              title="Performance Goal"
              description={<div style={style.cardContent}>
                  <label>5</label>
                  <label>Most recent update to skills</label>
                  <label>2 มกราคม 2561</label> 
                  </div>}
            />
          </Card>
          )
     }
}