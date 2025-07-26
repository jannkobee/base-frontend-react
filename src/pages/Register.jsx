import { Form, Input, Button, Flex } from 'antd';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
    const { registerAccount, display } = useRegister();

    return (
        <Flex style={{ height: '100vh' }} justify='center' align='center'>
            <Flex style={{ padding: '50px', border: '2px solid black', borderRadius: '10px' }} justify='center' vertical>
                <h1> Register </h1>
                <Form
                    name="basic"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={registerAccount}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email' }]}
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

                    <Form.Item
                        label="Confirm Password"
                        name="confirm_password"
                        rules={[{ required: true, message: 'Please confirm your password!', sameAs: 'password' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {display && (
                        <Form.Item
                            label="OTP"
                            name="otp"
                            rules={[{ required: true, message: 'Please input the otp that we sent to your email!' }]}
                        >
                            <Input.OTP />
                        </Form.Item>
                    )}

                    <Form.Item label={null} style={{ textAlign: 'center' }}>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit" disabled={false}>
                            Register
                        </Button>
                        Already have an account? <a href="/login">Login</a>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
    )
}

export default Register;