
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
    render(){
        return(
            <div>
<Select
    disabled
    showSearch
    style={{ width: 50 }}
    defaultValue="B"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="A">A</Option>
    <Option value="B">B</Option>
    <Option value="C">C</Option>
    <Option value="D">D</Option>
  </Select>
            </div>
        )
    }
}