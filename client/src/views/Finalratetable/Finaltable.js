
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card } from 'antd';
import Graph from '../Graph'
//import './index.css';
import Ratelist from './Ratelist';
import Ratelist1 from './Ratelist1';


const { Column, ColumnGroup } = Table;



export default class Finaltable extends PureComponent{

    state = {
        
       

         data2:[{
            
                key: '1',
                name: 'สมชาย_1',
                result:'A',
                md1:'A',
                md2:'B',
                md3:'B',
                
              },{
            
                key: '2',
                name: 'สมชาย_2',
                result:'A',
                md1:'A',
                md2:'A',
                md3:'B',
              },
              {
                key: '3',
                name: 'สมชาย_3',
                result:'B',
                md1:'A',
                md2:'B',
                md3:'B',
              },
               {
                key: '4',
                name: 'สมชาย_4',
                result:'A',
                md1:'B',
                md2:'A',
                md3:'B',
              }, {
                key: '5',
                name: 'สมชาย_5',
                result:'B',
                md1:'A',
                md2:'B',
                md3:'B',
              }, {
                key: '6',
                name: 'สมชาย_6',
                result:'B',
                md1:'A',
                md2:'A',
                md3:'B',
              }, {
                key: '7',
                name: 'สมชาย_7',
                result:'C',
                md1:'C',
                md2:'C',
                md3:'B',
              },{
                key: '8',
                name: 'สมชาย_8',
                result:'B',
                md1:'A',
                md2:'B',
                md3:'B',
              },{
                key: '9',
                name: 'สมชาย_9',
                result:'A',
                md1:'A',
                md2:'A',
                md3:'B',
              }, {
                key: '10',
                name: 'สมชาย_10',
                result:'B',
                md1:'B',
                md2:'B',
                md3:'B',
              },],
          col1:[{
            title: 'รายชื่อ',
            dataIndex: 'name',
            key: 'name',
            width:'30%',
            
          }, {
            title: 'ผลการกระเมิณ',
            dataIndex: 'result',
            key: 'result',
            width:'10%',
            
          },{
            title: 'MD1',
            dataIndex: 'md1',
            key: 'md1',
            width:'10%',
          },{
            title: 'MD2',
            dataIndex: 'md2',
            key: 'md2',
            width:'10%',
          },{
            title: 'MD3',
            dataIndex: 'md3',
            key: 'md3',
            width:'10%',
          },{
            title: 'Final',
            children: [{
            title:'Total1',
            dataIndex: 'total1',
            key: 'total1',
            width:'10%',
            render: () => (
                <Ratelist1 />),
            },
            {
            title:'Total2',
            dataIndex: 'total2',
            key: 'total2',
            width:'10%',
            render: () => (
                <Ratelist />),
            }]
          },
        ]
    }

       
    render(){
        return(
            <div style={{marginTop:20}}>
            <Graph />
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
          