import React,{PureComponent} from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import  Goals from './components/goal'
import Performances from './components/performance'
import Review from './components/reviewForm'
import Skill from './components/skill'
const gridStyle = {
    width: '25%',
    textAlign: 'center',
    cursor: "pointer",
  };

export default class  index extends PureComponent { 
    state = {openConetent: 1}
    onHandleClick = (t) =>{
        this.setState({openConetent:t})
    }
    render(){
         const {openConetent} = this.state
        return(
            <React.Fragment>
            <Card title="Employee Development" style={{width:"100%",backgroundColor:"#FFFF00",marginBottom: 15}}>
            <Card.Grid style={gridStyle} onClick={()=>this.onHandleClick(1)}>Performance</Card.Grid>
            <Card.Grid style={gridStyle} onClick={()=>this.onHandleClick(2)}>Goal</Card.Grid>
            <Card.Grid style={gridStyle} onClick={()=>this.onHandleClick(3)}>Review</Card.Grid>
            <Card.Grid style={gridStyle} onClick={()=>this.onHandleClick(4)}>Skill</Card.Grid>
          </Card>
            {(() => {
                    switch(openConetent) {
                    case 1:
                        return <Performances />;
                    case 2:
                        return <Goals />;
                    case 3:
                        return <Review />
                    case 4: 
                        return <Skill />
                    default:
                        return null;
                    }
                })()}      
          </React.Fragment>
        )
    }
}