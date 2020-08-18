import React, { useContext } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

import ListContext from "../ListContext";
import Checkbox from "./Checkbox";

const AddTodoForm = () => {
  const [list, setList] = useContext(ListContext);
  const [form] = Form.useForm();

  const handleSubmit = ({ text }) => {
    // add input to list
    if (text.length > 0) {
      const id = list.length;
      setList([...list, { id, text, completed: false }]);
      // clear the form
      form.resetFields();
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Row align="middle" gutter={8} style={{ flexGrow: 1, padding: "12px 0" }}>
        <Col flex="0 0 auto">
          <Checkbox disabled />
        </Col>
        <Col flex="1 0 auto">
          <Form.Item name="text" style={{ marginBottom: 0 }}>
            <Input placeholder="Add a todo" />
          </Form.Item>
        </Col>
        <Col flex="0 0 auto">
          <Form.Item style={{ marginBottom: 0 }}>
            <Button icon={<PlusCircleTwoTone />} htmlType="submit" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTodoForm;
