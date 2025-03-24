import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/slices/userSlice";
import { Button, Form, Input, message, Typography } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dummyUser = {
    email: "admin@test.com",
    password: "admin123",
  };

  const onFinish = (value) => {
    const { email, password } = value;

    if (email === dummyUser.email && password === dummyUser.password) {
      dispatch(setUserData({ value: { username: "user123" }, code: 200 }));
      navigate("/main");
      message.success("Login Berhasil!");
    } else {
      message.error("Email atau Password anda salah");
    }
  };

  const { Title } = Typography;

  return (
    <div className='flex flex-col items-center h-full justify-center'>
      <Title className='text-center'>Login Page</Title>
      <Form
        style={{ minWidth: "480px" }}
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: "Masukan email",
            },
          ]}
        >
          <Input placeholder='Enter your email' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: "Masukan email",
            },
          ]}
        >
          <Input.Password placeholder='Enter your email' />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
