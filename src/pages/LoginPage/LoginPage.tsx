import { FC, useEffect, useState, ChangeEvent } from 'react';
import { Form, Input, Button } from 'antd';
import { messages } from '../../utils';

const { title, buttons, form: loginPageForm } = messages.pages.authPage;
const { loginBtn } = buttons;
const { emailInput, passwordInput } = loginPageForm;

const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const [loginInputValue, setLoginInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const handleLoginInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInputValue(e.target.value);
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  };

  const onFinish = () => {
    console.log('on finish');
  };

  // const onFinish = ({ email, password }: IAuthPayload) => {
  //   dispatch(loginRequestAction({ email, password }));
  // };

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(emailInputChangeAction(e.target.value));
  // };

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(passwordInputChangeAction(e.target.value));
  // };

  // const handleForgotPasswordBtnClick = () => {
  //   dispatch(redirectAction('/forgot-password'));
  // };

  return (
    <div className="login-page">
      <Form form={form} name="basic" className="login-form" onFinish={onFinish}>
        <Form.Item
          label={emailInput.label}
          name={emailInput.name}
          rules={[{ required: true, type: 'email', message: emailInput.placeholder }]}
        >
          <Input onChange={handleLoginInputChange} />
        </Form.Item>

        <Form.Item
          label={passwordInput.label}
          name={passwordInput.name}
          rules={[{ required: true, message: passwordInput.placeholder }]}
        >
          <Input.Password onChange={handlePasswordInputChange} />
        </Form.Item>

        <div className="buttons">
          <Button id="login-btn" type="primary" htmlType="submit">
            {loginBtn}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
