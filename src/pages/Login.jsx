// pages/Login.jsx
import { Form, Input, Button, Flex, Checkbox } from 'antd';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const { loginAccount } = useLogin();

    return (
        <Flex style={{ height: '100vh' }} justify='center' align='center'>
            <Flex style={{ padding: '50px', border: '2px solid black', borderRadius: '10px' }} justify='center' vertical>
                <h1> Login </h1>
                <Form
                    name="basic"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={loginAccount}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {/* Don't have an account? <a href="/register">Register</a> */}
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
    );
};

export default Login;
