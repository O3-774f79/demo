
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
          listname: 'แผนกขายและการตลาด',
          branch: 'ฝ่ายการตลาด',
        },
        {
      
          key: '2',
          listname: 'แผนกกร๊าฟฟิก',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '3',
          listname: 'แผนกวางแผนจัดซื้อบรรจุภัณฑ์',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '4',
          listname: 'แผนกจัดซื้อยานพาหนะ',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '5',
          listname: 'แผนกบริหารคลังพัสดุ',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '6',
          listname: 'แผนกจัดซื้อสื่อโฆษณาและสินค้าทั่วไป',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '7',
          listname: 'แผนกขายและการตลาด',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '8',
          listname: "แผนกซ่อมบำรุงเฉพาะกิจ",
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '9',
          listname: 'แผนกสนับสนุนพิเศษ',
          branch:'ฝ่ายการตลาด',
        },
        {
      
          key: '10',
          listname: 'แผนกสนับสนุนพิเศษ',
          branch:'ฝ่ายการตลาด',
        },],
           col1:[{
            title: 'แผนก',
            dataIndex: 'listname',
            key: 'listname',
            width:'45%',
            
          },
          {
            title: 'ฝ่าย',
            dataIndex: 'branch',
            key: 'branch',
            width:'45%',
          
            
          },{
            title:'',
            width:'10%',
            render: (record) => (
              <Buttonmodal3 record={record}/> ),

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
          