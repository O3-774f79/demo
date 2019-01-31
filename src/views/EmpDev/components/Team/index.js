
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

export default class Index extends PureComponent {
     render() {
         return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
         )
     }
}
          