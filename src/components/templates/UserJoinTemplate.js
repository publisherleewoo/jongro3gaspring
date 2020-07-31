import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

// Member {
// 	email(아이디) <input email>
// 	pw
// 	name
// 	nickname
// 	birth
// 	age
// 	phone
// 	gender
// 	join_date(가입일)
// 	ban(정지여부)
// 	api_id
// }
const onFinish = (fieldsValue) => {
    // Should format date value before submit.

    console.log("Received values of form: ", fieldsValue);
};

const prefixSelector = (
    <Select defaultValue="010" style={{ width: 120 }}>
        <Select.Option value="010">010</Select.Option>
    </Select>
);

const UserJoinTemplate = () => {
    const [componentSize, setComponentSize] = useState("default");

    //daterpicker
    //select option   useState 별도처리
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <h1 align="center" style={{ padding: "50px" }}>
                Sign Up
            </h1>
            <Form
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 12 }}
                style={{ marginBottom: "100px" }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onFinish={onFinish}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { type: "email" },
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="passwordCheck"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    "The two passwords that you entered do not match!"
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="name"
                    label={<span>Name&nbsp;</span>}
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="nickname"
                    label={
                        <span>
                            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please input your nickname!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="birth"
                    label="birth"
                    rules={[
                        {
                            type: "object",
                            required: true,
                            message: "Please select birthDay!",
                        },
                    ]}
                >
                    <DatePicker style={{ width: "100%" }} />
                    {/* birth도 별도처리 */}
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!",
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true }]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Select.Option value="male">male</Select.Option>
                        <Select.Option value="female">female</Select.Option>
                    </Select>
                    {/* select 는 setState 별도처리 */}
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 7 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UserJoinTemplate;
