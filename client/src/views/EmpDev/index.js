import React, {PureComponent} from 'react' 
import ProfileCard from '../../components/CardDes'
import Team from './components/Team'
import 'antd/dist/antd.css';
import { Card, Button,Row,Col,Icon,Tabs } from 'antd';
import Information from './components/information'

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
    state={openContent :1,onChange:"1",showTeam:false}
     render() {
        const onHandleClick = ()=> {
            this.setState({openContent:1})
            console.log(this.state.openContent)
        }
        const onHandleClick2 = ()=> {
            this.setState({openContent:2})
            console.log(this.state.openContent)
        }
        const onHandleChange = ()=>{
            this.setState({openContent: this.state.onChange})
        }
          return( 
            <div>
            <div style={style.layoutPage}>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:30}}>
            <div style={{flexGrow:1, marginRight:10,flexWrap:"wrap",width:"10%"}}>
            <ProfileCard position={"Developer"} Name={"Ananchai Phahupongsub"}/>
                <Card style={{backgroundColor:"#f5f5ef"}}>
                <Button style={style.calendarBtn} onClick={onHandleClick2}>
                    <div style={style.calendarText}>
                    <Icon type="info-circle" style={style.calendarTextForIconTeam}/>
                <label style={{marginTop:10}}>Infomation</label>
                    </div>
                </Button>
                <Button style={style.calendarBtn} onClick={onHandleClick}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Icon type="team" style={style.calendarTextForIconTeam}/>
                </div>
                <label style={{marginTop:10}}>Team</label>
                </Button>
                </Card>
            </div>
           <div style={{flexGrow:1,width:"70%"}}>
                <Card style={{backgroundColor:"#f5f5ef"}}>
               {(() => {
                   console.log(this.state.openContent)
                switch(this.state.openContent) {
                    case 1:
                        return  <Team />;
                    case 2:
                        return <Information />;
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