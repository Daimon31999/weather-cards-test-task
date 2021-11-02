import { FC, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { logInAction } from '../../store/auth/authSlice';
import { useAppDispatch } from '../../store/hooks';
import { messages, VALID_PASSWORD, VALID_USER_NAME } from '../../utils';
import { validatePassword, validateUserName } from './helpers';
import './LoginPage.scss';

const { form: loginPageForm } = messages.pages.loginPage;
const { userNameInput, passwordInput, loginBtn } = loginPageForm;

const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    form.setFieldsValue({
      [userNameInput.name]: VALID_USER_NAME,
      [passwordInput.name]: VALID_PASSWORD,
    });
  }, []);

  const onSubmit = () => {
    const userName = form.getFieldValue(userNameInput.name);
    const password = form.getFieldValue(passwordInput.name);

    dispatch(logInAction({ userName, password }));
  };

  return (
    <div className="login-page">
      <Form
        form={form}
        name="login-form"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label={userNameInput.label}
          name={userNameInput.name}
          rules={[{ required: true, message: userNameInput.placeholder }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={passwordInput.label}
          name={passwordInput.name}
          rules={[{ required: true, message: passwordInput.placeholder }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item shouldUpdate wrapperCol={{ offset: 4, span: 20 }}>
          {({ getFieldsValue }) => {
            const { [passwordInput.name]: passwordValue, [userNameInput.name]: userNameValue } =
              getFieldsValue();

            const validation = !!(
              validateUserName(userNameValue) && validatePassword(passwordValue)
            );

            return (
              <Button type="primary" htmlType="submit" disabled={!validation}>
                {loginBtn}
              </Button>
            );
          }}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
