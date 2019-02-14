
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
        // width: 400,
        backgroundColor:"#f5f5ef",
        marginBottom: 20
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
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={style.ImageProfile}/>}
                title={this.props.Name}
                description={<div><p>Position: <br />{this.props.position}</p><p>Company: <br />Leaderplanet</p></div>}
              />
            </Card>     
        )
    }

}