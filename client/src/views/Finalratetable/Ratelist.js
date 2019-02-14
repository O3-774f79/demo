
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
const children = [<Option value="A">A</Option>,<Option value="B">B</Option>,<Option value="C">C</Option>,<Option value="D">D</Option>];
export default class Ratelist extends PureComponent{
    render(){
        return(
            <div>
<Select
    style={{ width: "70%" }}
    // mode="tags"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    {children}
  </Select>
            </div>
        )
    }
}