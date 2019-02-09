import React, { Component,Fragment } from 'react'
import Moment from 'moment'
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}
class MomentExample extends Component {
render(){
    const dateTime= '2016-05-02T00:00:00'
    Moment.locale('th') //For Turkey
    const formattedDT = Moment().format('LL')//20 Mart 2017
    return(<Fragment> 
        {/* {formattedDT}  */}
        <DatePicker onChange={onChange} />
        </Fragment>)
}
}
export default MomentExample;