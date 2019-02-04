import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Tree } from "antd";

const { TreeNode } = Tree;

export default class NodeTrees extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  render() {
    return (
      <Tree showLine defaultExpandedKeys={["0-0-0"]} onSelect={this.onSelect}>
        <TreeNode title="parent 3" key="0-0">
          <TreeNode title="leaf" key="0-0-0-0" />
          <TreeNode title="leaf" key="0-0-0-1" />
          <TreeNode title="leaf" key="0-0-0-2" />
          <TreeNode title="leaf" key="0-0-1-0" />
        </TreeNode>
        <TreeNode title="parent 3" key="0-1">
          <TreeNode title="leaf" key="0-0-0-0" />
          <TreeNode title="leaf" key="0-0-0-1" />
          <TreeNode title="leaf" key="0-0-0-2" />
          <TreeNode title="leaf" key="0-0-1-0" />
        </TreeNode>
        <TreeNode title="parent 3" key="0-2">
          <TreeNode title="leaf" key="0-0-0-0" />
          <TreeNode title="leaf" key="0-0-0-1" />
          <TreeNode title="leaf" key="0-0-0-2" />
          <TreeNode title="leaf" key="0-0-1-0" />
        </TreeNode>
      </Tree>
    );
  }
}

