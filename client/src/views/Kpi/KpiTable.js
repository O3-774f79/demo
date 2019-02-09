
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Table, Input, Form,Icon,Modal,Button
} from 'antd';

import FormDisplay from './FormDisplay'

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
    visibleParent: false,
    loading: false,
    DataInTable: {},
  }

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  handleClickOutside = (e) => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  }

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                      />
                    )}
                  </FormItem>
                ) : (
                  <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                  >
                    {restProps.children}
                  </div>
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
    {
        title: 'Name',
        dataIndex: 'Name',
    },
    {
      title: 'Goal Catagory',
      dataIndex: 'GoalCatagory',
    }, {
      title: 'Start Date',
      dataIndex: 'StartDate',
    }, {
      title: 'End Date',
      dataIndex: 'EndDate',
    }, 
    {
        title: 'Status',
        dataIndex: 'Status',
      }, {
      title: '',
      dataIndex: 'operation',
      render: (text, record) => (
        // this.state.dataSource.length >= 1
        //   ? (
        //     <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
        //       <a href="javascript:;">Delete</a>
        //     </Popconfirm>
            
        //   ) : null
        <Icon type="search" onClick={()=>this._handleIconCLick(record)}  style={{cursor:"pointer"}}/>
      ),
    }];

    this.state = {
      dataSource: [{
        key: '0',
        Name:'ปริมาณของงาน',
        GoalCatagory: 'Result(What To Do)',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
      {
        key: '1',
        Name:'คุณภาพของงาน',
        GoalCatagory: 'Result(What To Do0',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
    //   {
    //     key: '2',
    //     Name:'การทำงานเชิงกลยุทธ์',
    //     GoalCatagory: 'Method(How To Do)-Behavior',
    //     StartDate: '01.01.2019',
    //     EndDate: '30.06.2014',
    //     Status: 'Not Start'
    //   },
      {
        key: '3',
        Name:'การวางแผนและการจัดลำดับความสำคัญของงาน',
        GoalCatagory: 'Method(How To Do)-Behavior',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
    //   {
    //     key: '4',
    //     Name:'การนำการเปลี่ยนแปลง',
    //     GoalCatagory: 'Method(How To Do)-Behavior',
    //     StartDate: '01.01.2019',
    //     EndDate: '30.06.2014',
    //     Status: 'Not Start'
    //   },
    //   {
    //     key: '5',
    //     Name:'การทำงานอย่างมีระบบและมีการตัดสินใจที่ดี',
    //     GoalCatagory: 'Method(How To Do)-Behavior',
    //     StartDate: '01.01.2019',
    //     EndDate: '30.06.2014',
    //     Status: 'Not Start'
    //   },
      {
        key: '6',
        Name:'การแก้ไขปัญหาและการตัดสินใจ',
        GoalCatagory: 'Method(How To Do)-Behavior',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
    //   {
    //     key: '7',
    //     Name:'ความคิดริเริ่มสามารถนำมาพัฒนาปรับปรุงระบบงาน',
    //     GoalCatagory: 'Method(How To Do)-Behavior',
    //     StartDate: '01.01.2019',
    //     EndDate: '30.06.2014',
    //     Status: 'Not Start'
    //   },
      {
        key: '8',
        Name:'การติดต่อสื่อสารและการประสานงาน',
        GoalCatagory: 'Method(How To Do)-Behavior',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
    //   {
    //     key: '9',
    //     Name:'การพัฒนาผู้ใต้บังคับบัญชา',
    //     GoalCatagory: 'Method(How To Do)-Behavior',
    //     StartDate: '01.01.2019',
    //     EndDate: '30.06.2014',
    //     Status: 'Not Start'
    //   },
      {
        key: '10',
        Name:'การพัฒนาตนเอง',
        GoalCatagory: 'Method(How To Do)-Behavior',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
      {
        key: '11',
        Name:'Family',
        GoalCatagory: 'Singha Way(How todo)-Core Value',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
      {
        key: '12',
        Name:'Courage',
        GoalCatagory: 'Singha Way(How todo)-Core Value',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
      {
        key: '13',
        Name:'Premium Quality',
        GoalCatagory: 'Singha Way(How todo)-Core Value',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
      {
        key: '14',
        Name:'Hapiness',
        GoalCatagory: 'Singha Way(How todo)-Core Value',
        StartDate: '01.01.2019',
        EndDate: '30.06.2014',
        Status: 'Not Start'
      },
    ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  _handleIconCLick = (record) => {
    console.log("record", record)
    console.log("level",this.props.TableLevel)
    this.setState({visibleParent:true,DataInTable: record})
  }
  _Cancle = ()=> {
       this.setState({visibleParent: false})
  }
  _handleOk = () => {
      this.setState({visibleParent: false})
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }
  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        {/* <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button> */}
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          size="small"
        />
         <Modal
          width	= {1000}
          title=" "
          style = {{left: 50}}
          visible={this.state.visibleParent}
          onCancel={this._Cancle}
          footer={[
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this._handleOk}>
              ตกลง
            </Button>,
          ]}
        >
        <FormDisplay 
            TableLevel={this.props.TableLavel}
            record={this.state.DataInTable} />
        </Modal>
      </div>
    );
  }
}          