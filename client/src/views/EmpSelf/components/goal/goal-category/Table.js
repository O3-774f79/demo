import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import Modals from './Modals'
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
    editing: false
  };

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener("click", this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener("click", this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  handleClickOutside = e => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  };

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

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
            {form => {
              this.form = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title} is required.`
                      }
                    ],
                    initialValue: record[dataIndex]
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
              );
            }}
          </EditableContext.Consumer>
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Goal Category",
        dataIndex: "goalCategory",
        width: "30%",
        editable: true
      },
      {
        title: "Description",
        dataIndex: "description",
        editable: true
      },
      {
        title: "Job",
        dataIndex: "workertype",
        editable: true
      },
      {
        title: "Status",
        dataIndex: "status",
        editable: true
      },
    ];

    this.state = {
      dataSource: [
        {
          key: "0",
          goalCategory: "Result",
          description: "What to do",
          workertype: "ผู้ปฏิบัติงาน",
          status: "active"
        },
        {
          key: "0",
          goalCategory: "Method",
          description: "How to do Behavior",
          workertype: "ผู้ปฏิบัติงาน",
          status: "active"
        },
        {
          key: "0",
          goalCategory: "Singha Way",
          description: "How to do Core Values",
          workertype: "ผู้ปฏิบัติงาน",
          status: "active"
        },
      ],
      count: 2,
      modalDisplay :false,
      nameSelect: "",
      keySelect: ""
    };
  }

  handleModal = (key,name) => {
      console.log("key",key)
      console.log("name",name)
      this.setState({modalDisplay: true,nameSelect: name, keySelect:key})
  }
  handleCancleShow =()=>{
      this.setState({modalDisplay: false})
  }
  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    }
    const columns = this.columns.map(col => {
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
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Add New
        </Button>
        <Button
          onClick={this.handleDelete}
          type="danger"
          style={{ marginBottom: 16 }}
        >
          Delete
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          rowSelection={rowSelection}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        <Modals visibleParent={this.state.modalDisplay} handleCancleShow={this.handleCancleShow} titleName={this.state.nameSelect} titleKey={this.state.keySelect} />
      </div>
    );
  }
}

