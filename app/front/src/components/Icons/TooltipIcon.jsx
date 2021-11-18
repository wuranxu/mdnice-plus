import {Tooltip} from "antd";
import React from 'react';
import {QuestionCircleOutlined} from "@ant-design/icons";

export default ({title, link = false, icon = <QuestionCircleOutlined style={{cursor: 'pointer'}}/>}) => {
  return (
    <Tooltip title={title}>
      {
        link === false ? icon : <a href={link} target="_blank" rel="noreferrer">{icon}</a>
      }
    </Tooltip>
  )
}
