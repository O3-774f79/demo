
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Card, Button,Row,Col,Icon } from 'antd';

const style = {
    Button: {
        width: "100px",
        height: '100px',
        fontSize: 60,
        marginLeft:20
    },
    box: {
        // padding: "7px 7px 7px 7px",
        // marginLeft: 100,
    },
    card: {
        boxShadow: "0 10px 6px -6px #777",
        width: 600,      
    }, 
    des: {
        display: 'block',
        textAlign: "center"
    },   
    calendarText:{
        display:"flex",
        flexDirection: 'column',        
    },
    calendarBtn:{
            width: "100px",
            height: '100px',
            marginLeft:20,
    }
}
export default class Index extends PureComponent{
    onHandleClick() {
        
    }
    render(){
        return(          
            <Card
              style={style.card}
            >
            <Row>
            <Col span={6}>
            <Button style={style.Button}>1</Button>
            </Col>
            <Col span={6}>            
            <Button style={style.Button}>3</Button>
            </Col>
            <Col span={6}>            
            <Button style={style.Button} onClick={this.onHandleClick}>
            <Icon type="team" style={{marginBottom: 10}}/>
            </Button>
            </Col>
            <Col span={6}>            
            <Button style={style.calendarBtn}>
            <div style={style.calendarText}>
            <label>มกราคม,2562</label>
            <label style={{fontSize: 30}}>28</label>
            <label>วันจันทร์</label>
            </div>
            </Button>
            </Col>
            </Row>

            <Row>
            <Col span={6}>
            <label style={style.des}>Work item assgined to me</label>
            </Col>
            <Col span={6}>            
            <label style={style.des}>Questionnaires assigned to me</label>
            </Col>
            <Col span={6}>            
            <label style={style.des}>Team</label>
            </Col>
            <Col span={6}>            
            <label style={style.des}>Next Scheduled Review</label>
            </Col>
            </Row>  
            </Card>     
        )
    }

}