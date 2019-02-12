
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card, } from 'antd';
//import './index.css';
import Buttonmodal3 from './Buttonmodal3';


const { Column, ColumnGroup } = Table;



export default class List3 extends PureComponent{

    state = {


        
        data1:[{
            
                key: '1',
                listname: 'สมชาย_1',
              },
              {
            
                key: '2',
                listname: 'สมชาย_2',
              },
              {
            
                key: '3',
                listname: 'สมชาย_3',
              },
              {
            
                key: '4',
                listname: 'สมชาย_4',
              },
              {
            
                key: '5',
                listname: 'สมชาย_5',
              },
              {
            
                key: '6',
                listname: 'สมชาย_6',
              },
              {
            
                key: '7',
                listname: 'สมชาย_7',
              },
              {
            
                key: '8',
                listname: 'สมชาย_8',
              },
              {
            
                key: '9',
                listname: 'สมชาย_9',
              },],
           col1:[{
            title: 'รายชื่อ',
            dataIndex: 'listname',
            key: 'listname',
            width:'70%',
            
          },{
            title:'',
            width:'10%',
            render: () => (
              <Buttonmodal3 /> ),

          }
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
          