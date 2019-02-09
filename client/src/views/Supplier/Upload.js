import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Upload, Button, Icon, message } from "antd";
// import reqwest from "reqwest";

export default class UploadItem extends React.Component {
  state = {
    fileList: [],
    uploading: false
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append("files[]", file);
    });

    this.setState({
      uploading: true
    });

    // You can use any AJAX library you like
//     reqwest({
//       url: "//jsonplaceholder.typicode.com/posts/",
//       method: "post",
//       processData: false,
//       data: formData,
//       success: () => {
//         this.setState({
//           fileList: [],
//           uploading: false
//         });
//         message.success("upload successfully.");
//       },
//       error: () => {
//         this.setState({
//           uploading: false
//         });
//         message.error("upload failed.");
//       }
//     });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      listType: "text",
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> แนบเอกสาร
          </Button>
        </Upload>
      </div>
    );
  }
}

