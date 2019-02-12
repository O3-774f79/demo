import React, {PureComponent} from 'react' 
import ProfileCard from '../../components/CardDes'
import Team from './components/Team'
import TabIcon from './components/TabIcon'
import 'antd/dist/antd.css';
import { Card, Button,Row,Col,Icon,Tabs,Modal } from 'antd';
import Information from './components/information'
import MDTetable from '../MDratetable'
import Graph from '../Graph'
import Summary from '../Kpi'
import FinalTable from '../Finalratetable'
const TabPane = Tabs.TabPane;
const style = { 
    layoutPage: {display: "flex",flexWrap:"wrap",marginBottom: 10 ,marginTop:10},
    Button: {
        width: "100px",
        height: '100px',
        fontSize: 60,
        marginLeft:20
    },
    card: {
        boxShadow: "0 10px 6px -6px #777",
        width: 600,     
        backgroundColor: "#F9A484", 
        marginLeft: 10
    }, 
    des: {
        display: 'block',
        textAlign: "center"
    },   
    calendarText:{
        display:"flex",
        flexDirection: 'column',        
    },
    calendarTextForIconTeam:{
        width: "100px",
        height: '100px',
        fontSize: 60, 
    },
    calendarBtn:{
            width: "100px",
            height: '100px',
            marginLeft:20,
            marginTop: 5
    }
}
export default class Index extends PureComponent {
    state={openContent :"1",onChange:"1",showTeam:false,visible: false,visible2: false }
            handleOk = (e) => {
                console.log(e);
                this.setState({
                visible: false,
                });
            }

            handleCancel = (e) => {
                console.log(e);
                this.setState({
                visible: false,
                });
            }
            handleOk2 = (e) => {
                console.log(e);
                this.setState({
                visible2: false,
                });
            }

            handleCancel2 = (e) => {
                console.log(e);
                this.setState({
                visible2: false,
                });
            }
     render() {
        const onHandleClick = ()=> {
            this.setState({openContent:"2"})
            console.log(this.state.openContent)
        }
        const onHandleChange = ()=>{
            this.setState({openContent: this.state.onChange})
        }
        const _onHandleClick = ()=> {
            this.setState({
                visible: true,
                });
        }
        const _onHandleClick2 = ()=> {
            this.setState({
                visible2: true,
                });
        }
          return( 
            <div>
            <div style={style.layoutPage}>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:30}}>
            <div style={{flexGrow:1, marginRight:10,flexWrap:"wrap"}}>
            <ProfileCard position={"General Manager"} Name={"Somsunh Somburanayut"}/>
                <Card style={{backgroundColor:"#f5f5ef"}}>
                <Button style={style.calendarBtn} onClick={_onHandleClick}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Icon type="solution" style={style.calendarTextForIconTeam}/>
                    </div>
                    Review
                </Button>
                <Modal
                    title=""
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={800}
                    >
                    {/* <Graph />
                    <MDTetable /> */}
                    <FinalTable />
                    </Modal>
                <Button style={style.calendarBtn} onClick={onHandleClick}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Icon type="team" style={style.calendarTextForIconTeam}/>
                </div>
                Team
                </Button>
                <Button style={style.calendarBtn} onClick={_onHandleClick2}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Icon type="contacts" style={style.calendarTextForIconTeam}/>
                    </div>
                    Review Goal
                </Button>
                <Modal
                    title=""
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                    width={900}
                    >
                    <Summary />
                    </Modal>
                </Card>
            </div>
           <div style={{flexGrow:1}}>
               <Card style={{backgroundColor:"#f5f5ef"}}>
                <Tabs defaultActiveKey={this.state.openContent} onChange={onHandleChange} activeKey={this.state.openContent}>
                <TabPane tab={<div style={style.iconFormat}><Icon style={style.iconStyle}type="user" /><label style={style.iconText}>Information</label></div>} key="1"><Information /></TabPane>
                <TabPane tab={<div style={style.iconFormat}></div>} key="2"><Team /></TabPane>
                </Tabs>   
                </Card>
            </div>    
          </div> 
          </div>    
          )
     }
}