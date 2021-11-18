import {Tooltip} from "antd";
import React from 'react';
import {QuestionCircleOutlined} from "@ant-design/icons";

export default ({title, text, icon = <QuestionCircleOutlined style={{cursor: 'pointer'}}/>}) => {
  return (
    <Tooltip title={title}>
      <span>{text} {icon}</span>
    </Tooltip>
  )
}
