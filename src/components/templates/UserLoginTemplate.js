import React, { useState }  from "react";
import {
    Form,
    Input,
    Button,
    Radio,
} from "antd";
import * as UserApi from "../../module/Axios";
const onFinish = (fieldsValue) => {
    let {
        email,
        password,
    } = fieldsValue;

    const result = {
        email,
        password,
    };
    console.log(result);
    UserApi.register(result);
};


const UserLoginTemplate = () => {
    const [componentSize, setComponentSize] = useState("default");

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <h1 align="center" style={{ padding: "50px" }}>
                Log in
            </h1>
            <Form
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 12 }}
                style={{ marginBottom: "100px" }}
                layout="horizontal"
                initialValues={{ size: componentSize, prefixPhone: "010" }}
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
                        {
                            min: 8,
                            message: "8 characters or more",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 7 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <a href style={style.href}>I forgot my member information</a>
                </Form.Item>
            </Form>
        </>
    );
};

export default UserLoginTemplate;

const style = {
    href: {
        paddingLeft: '20px'
    }
}