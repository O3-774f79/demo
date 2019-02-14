
import React, {PureComponent} from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

export default class Ratelist1 extends PureComponent{
  state={record:{}}
  componentDidMount(){
    this.setState({record:this.props.record})
  }
    render(){
      console.log("testtest",this.state.record)
        return(
            <div>
<Select
    disabled
    showSearch
    style={{ width: "70%" }}
    defaultValue="B"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
  </Select>
            </div>
        )
    }
}