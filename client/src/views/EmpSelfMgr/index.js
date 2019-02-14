import React, {PureComponent} from 'react' 
import ProfileCard from '../../components/CardDes'
import Team from './components/Team'
import TabIcon from './components/TabIcon'
import 'antd/dist/antd.css';
import { Card, Button,Row,Col,Icon,Tabs,Modal } from 'antd';
import Information from './components/information'
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
        width: "50px",
        height: '50px',
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
    state={openContent:1,showTeam:false,visible: false,visible2: false, title:"Information" }
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
        const _onHandleClick = ()=> {
            this.setState({
                visible: true,
                openContent:1,
                title:"Information"
                });
        }
        const _onHandleClick2 = ()=> {
            this.setState({
                visible2: true,
                openContent:2,
                title:"Review Goal"
                });
        }
        const _onHandleClick3 = ()=> {
            this.setState({
                visible: true,
                openContent:3,
                title:"Team"
                });
        }
        const _onHandleClick4 = ()=> {
            this.setState({
                visible2: true,
                openContent:4,
                title:"Review"
                });
        } 
          return( 
            <div>
            <div style={style.layoutPage}>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:30}}>
            <div style={{marginRight:10,flexWrap:"wrap",flexGrow:1,width:"10%"}}>
            <ProfileCard position={"General Manager"} Name={"Somsunh Somburanayut"}/>
                <Card style={{backgroundColor:"#f5f5ef"}}>
                <Button style={style.calendarBtn} onClick={_onHandleClick}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Icon type="info-circle" style={style.calendarTextForIconTeam}/>
                    </div>
                    <label style={{marginTop:10}}>Information</label>
                </Button>
                <Button style={style.calendarBtn} onClick={_onHandleClick4}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Icon type="solution" style={style.calendarTextForIconTeam}/>
                    </div>
                    <label style={{marginTop:10}}>Review</label>
                </Button>
                <Button style={style.calendarBtn} onClick={_onHandleClick3}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Icon type="team" style={style.calendarTextForIconTeam}/>
                </div>
                <label style={{marginTop:10}}>Team</label>
                </Button>
                <Button style={style.calendarBtn} onClick={_onHandleClick2}>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Icon type="contacts" style={style.calendarTextForIconTeam}/>
                    </div>
                    <label style={{marginTop:10}}>Review Goal</label>              
                </Button>
                </Card>
            </div>
           <div style={{flexGrow:1,width:"70%"}}>
                <Card style={{marginBottom:5}}>
                    <h2>{this.state.title}</h2>
                </Card>
               <Card style={{backgroundColor:"#f5f5ef"}}>
               {(() => {
                   console.log(this.state.openContent)
                switch(this.state.openContent) {
                    case 1:
                        return  <Information />;
                    case 2:
                        return <FinalTable />;
                    case 3:
                        return  <Team />;
                    case 4:
                        return  <Summary />;
                    default:
                        return null;
                        }
                })()}
                </Card>
            </div>    
          </div> 
          </div>    
          )
     }
}