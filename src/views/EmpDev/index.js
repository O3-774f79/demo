import React, {PureComponent} from 'react' 
import ProfileCard from '../../components/CardDes'
import Team from './components/Team'
import TabIcon from './components/TabIcon'
import 'antd/dist/antd.css';
import { Card, Button,Row,Col,Icon,Tabs } from 'antd';
import Information from './components/information'

const TabPane = Tabs.TabPane;
const style = { 
    layoutPage: {display: "flex",justifyContent: "space-between",marginBottom: 10},
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
export default class Index extends PureComponent {
    state={openContent :"1",onChange:"1"}
     render() {
        const onHandleClick = ()=> {
            this.setState({openContent:"2"})
            console.log(this.state.openContent)
        }
        const onHandleChange = ()=>{
            this.setState({openContent: this.state.onChange})
        }
          return( 
            <div>
            <div style={style.layoutPage}>
                <ProfileCard />
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
            <Button style={style.Button} onClick={onHandleClick}>
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
            </div>
            <Tabs defaultActiveKey={this.state.openContent} onChange={onHandleChange} activeKey={this.state.openContent}>
            <TabPane tab={<div style={style.iconFormat}><Icon style={style.iconStyle}type="user" /><label style={style.iconText}>Information</label></div>} key="1"><Information /></TabPane>
            <TabPane tab={<div style={style.iconFormat}><Icon style={style.iconStyle}type="user" /><label style={style.iconText}>Team</label></div>} key="2"><Team /></TabPane>
          
          </Tabs>       
            </div>
          )
     }
}