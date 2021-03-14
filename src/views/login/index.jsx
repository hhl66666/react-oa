import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './style.css'
class Login extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login_background">
                <div className="positon-right-c">
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit} className="login-form">
                        <div className="item-center">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住账号</Checkbox>)}
                                
                                <a className="login-form-forgot" href="">
                                忘记密码
              </a><br></br>
                                <Button className="login-btn" type="primary" htmlType="submit" className="login-form-button">
                                  登录
              </Button>
              <br></br>
              或<a href="">立即注册！</a>
                            </Form.Item>
                        </div>

                    </Form>
                </div>

            </div>

        );
    }
}

Login = Form.create({ name: 'normal_login' })(Login)
export default Login