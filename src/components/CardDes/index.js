
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import iconLine from './img/line.svg'
import { Card, Icon, Avatar } from 'antd';

const style = {
     IconSize: {
        width: '2em',
        height:'2em'
    },
     ImageProfile: {
        width: 100,
        height: 100 
     },
     Card: {
        boxShadow: "0 10px 6px -6px #777",
        width: 500,
        backgroundColor: "#FFFF88",
     }
     
}
export default class Index extends PureComponent{
    render(){
        const { Meta } = Card;
        return(          
            <Card
              style={style.Card}
              actions={[<Icon type="mail" />,<img src={iconLine} style={style.IconSize }/>, <Icon type="setting" />]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={style.ImageProfile}/>}
                title="นาย ทดสอบ ทดสอบ"
                description={<div><p>Position: Developer</p><p>Company: Leaderplanet</p></div>}
              />
            </Card>     
        )
    }

}