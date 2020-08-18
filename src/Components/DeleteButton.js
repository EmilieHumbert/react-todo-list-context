import React from "react";
import { Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

const DeleteButton = ({ handleDelete }) => {
  return <Button icon={<DeleteTwoTone />} onClick={handleDelete} />;
};

export default DeleteButton;
