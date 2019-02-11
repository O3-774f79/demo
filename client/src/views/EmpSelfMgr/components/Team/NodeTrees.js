import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Tree,Icon } from "antd";

const { TreeNode } = Tree;

export default class NodeTrees extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  render() {
    return (
      <Tree showIcon defaultExpandAll defaultExpandedKeys={["0-0-0"]} onSelect={this.onSelect}>
        <TreeNode title="HR Specialist" key="0-0" icon={<Icon type="team" />} >
          <TreeNode title="Emp1" key="0-0-0-0" icon={<Icon type="user" />} />
          <TreeNode title="Emp2" key="0-0-0-1" icon={<Icon type="user" />} />
          <TreeNode title="Emp3" key="0-0-0-2" icon={<Icon type="user" />} />
          <TreeNode title="Emp4" key="0-0-1-0" icon={<Icon type="user" />} />
        </TreeNode>
        <TreeNode title="HR Generalist" key="0-1" icon={<Icon type="team" />} >
          <TreeNode title="Emp5" key="0-0-0-0" icon={<Icon type="user" />}  />
          <TreeNode title="Emp6" key="0-0-0-1" icon={<Icon type="user" />} />
          <TreeNode title="Emp7" key="0-0-0-2"  icon={<Icon type="user" />} />
          <TreeNode title="Emp8" key="0-0-1-0" icon={<Icon type="user" />} />
        </TreeNode>
        <TreeNode title="Recruiter" key="0-2" icon={<Icon type="team" />} >
          <TreeNode title="Emp9" key="0-0-0-0" icon={<Icon type="user" />} />
          <TreeNode title="Emp10" key="0-0-0-1" icon={<Icon type="user" />} />
          <TreeNode title="Emp11" key="0-0-0-2" icon={<Icon type="user" />} />
          <TreeNode title="Emp12" key="0-0-1-0" icon={<Icon type="user" />} />
        </TreeNode>
      </Tree>
    );
  }
}

