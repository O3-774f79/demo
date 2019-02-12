
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card, } from 'antd';

//import './index.css';
import Buttonmodal2 from './Buttonmodal2';


const { Column, ColumnGroup } = Table;



export default class List2 extends PureComponent{

    state = {


        
        data1:[{
            
                key: '1',
                listname: 'สมชาย_1',
                status: 'On tack'
              },
              {
            
                key: '2',
                listname: 'สมชาย_2',
                status: 'On tack'
              },
              {
            
                key: '3',
                listname: 'สมชาย_3',
                status: 'On tack'
              },
              {
            
                key: '10',
                listname: 'สมชาย_10',
                status: 'On tack'
              },],
           col1:[{
            title: 'รายชื่อ',
            dataIndex: 'listname',
            key: 'listname',
            width:'70%',
            
          }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width:'20%',
          },{
            title:'',
            width:'10%',
            render: () => (
              <Buttonmodal2 /> ),
          },
          ],
         
      
     
    }

       
    render(){
        return(
            <div>
           
          

            <Table  
            bordered={true} 
            size="small" 
            columns={this.state.col1} 
            dataSource={this.state.data1}
            pagination={false} />

       
    
   
  
            </div>
        )
    }
}
          