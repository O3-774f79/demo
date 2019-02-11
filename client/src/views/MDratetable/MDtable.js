
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card } from 'antd';

//import './index.css';
import Ratelist from './Ratelist';


const { Column, ColumnGroup } = Table;



export default class MDtable extends PureComponent{

    state = {
        
         data2:[{
            
                key: '1',
                content: 'Result(What to Do)',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
                
              },{
            
                key: '2',
                content: 'ปริมาณของงาน',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              },
              {
                key: '3',
                content: 'คุณภาพของงาน',
                rate:'B',
                md1:'',
                md2:'',
                md3:'',
              },
               {
                key: '4',
                content: 'Method(How to do) - Behavior',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '5',
                content: 'การทำงานเชิงกลยุทธ์',
                rate:'B',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '6',
                content: 'การวางแผนและจัดลำดับความสำคัญของงาน',
                rate:'B',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '7',
                content: 'การนำการเปลี่ยนแปลง',
                rate:'C',
                md1:'',
                md2:'',
                md3:'',
              },{
                key: '8',
                content: 'การทำงานอย่างมีระบบและมีการตัดสินใจที่ดี',
                rate:'B',
                md1:'',
                md2:'',
                md3:'',
              },{
                key: '9',
                content: 'การแก้ไขปัญหาและการตัดสินใจ',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '10',
                content: 'ความคิดริเริ่มที่สามารถนำมาพัฒนาปรับปรุงงาน',
                rate:'B',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '11',
                content: 'การติดต่อสื่อสารและประสานงาน',
                rate:'B',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '12',
                content: 'การพัฒนาผู้ใต้บังคับบัญชา',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '13',
                content: 'การพัฒนาตนเอง',
                rate:'C',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '14',
                content: 'Singha Way(How to Do) - Core Values',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '15',
                content: 'Family',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '16',
                content: 'Courage',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              }, {
                key: '17',
                content: 'Premium Quality',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
              },{
                key: '18',
                content: 'Hapiness',
                rate:'A',
                md1:'',
                md2:'',
                md3:'',
          },],
          col1:[{
            title: 'ปัจจัยประเมิณ',
            dataIndex: 'content',
            key: 'content',
            
          }, {
            title: 'ประเมิณ',
            dataIndex: 'rate',
            key: 'rate',
          },{
            title: 'MD1',
            dataIndex: 'md1',
            key: 'md1',
            render: () => (
                <Ratelist />),
         
          },{
            title: 'MD2',
            dataIndex: 'md2',
            key: 'md2',
            render: () => (
                <Ratelist />),
         
          },{
            title: 'MD3',
            dataIndex: 'md3',
            key: 'md3',
            render: () => (
                <Ratelist />),
          
          },{
            title: 'Final',
            dataIndex: 'final',
            key: 'final',
            
          },
        ]
    }

       
    render(){
        return(
            <div style={{marginTop:20}}>
<Card
      
      style={{ width: "100%" }}
    >
    
            <Table 
            bordered={true}
            size="small" 
            columns={this.state.col1} 
            dataSource={this.state.data2}
            pagination={false} />
            </Card>
            </div>
        )
    }
}
          