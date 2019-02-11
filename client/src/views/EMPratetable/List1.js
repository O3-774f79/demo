
import React,{PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Table, Pagination, Input, Card, } from 'antd';

//import './index.css';
import Ratelist from './Ratelist';
import Buttonmodal from './Buttonmodal';


const { Column, ColumnGroup } = Table;



export default class List1 extends PureComponent{

    state = {


        
        data1:[{
            
                key: '1',
                list: 'แบบประเมิณครั้งที่ 1 ',
                status: 'Not started',
              },
              {
            
                key: '2',
                list: 'แบบประเมิณครั้งที่ 2 ',
                status: 'On track',
              },
              {
            
                key: '3',
                list: 'แบบประเมิณครั้งที่ 3 ',
                status: 'On track',
              },],
           col1:[{
            title: 'รายการ',
            dataIndex: 'list',
            key: 'list',
            
          }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },{
            title: '',
            render: () => (
                <Buttonmodal /> ),
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
          