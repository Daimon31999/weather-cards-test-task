import { Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { messages } from '../../utils';
import TagInput from '../TagInput/TagInput';
import './AddLocationModal.scss';

/**
 * Форма добавления локации (авторизованный)
 * Форма будет состоять из полей:
 * Title - text,
 * Coordinates (lat,lan) - number,  (could be replaced with city name)
 * Description - text,
 * Tags -  text, separated by comma / or use a custom component
 */

const { coordinatesInput, titleInput, descriptionInput, tagsInput } =
  messages.components.addLocationModal.form;

const AddLocationModal: FC = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const titleValue = form.getFieldValue(titleInput.name);
    const descriptionValue = form.getFieldValue(descriptionInput.name);
    const coordinatesValue = form.getFieldValue(coordinatesInput.name);
    const tagsValue = form.getFieldValue(tagsInput.name);

    // dispatch(logInAction({ userName, password }));
  };

  return (
    <div className="">
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
          label={titleInput.label}
          name={titleInput.name}
          rules={[{ required: true, message: titleInput.placeholder }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={coordinatesInput.label}
          name={coordinatesInput.name}
          rules={[{ required: true, message: coordinatesInput.placeholder }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={descriptionInput.label}
          name={descriptionInput.name}
          rules={[{ required: true, message: descriptionInput.placeholder }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={tagsInput.label}
          name={tagsInput.name}
          rules={[{ required: true, message: tagsInput.placeholder }]}
        >
          {/* <Input /> */}
          <TagInput />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddLocationModal;
