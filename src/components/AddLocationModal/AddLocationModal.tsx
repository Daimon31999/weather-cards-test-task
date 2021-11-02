import { FC, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import {
  addLocationAction,
  selectorTags,
  setTagsAction,
} from '../../store/locations/locationsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { messages } from '../../utils';
import TagInput from '../TagInput/TagInput';
import './AddLocationModal.scss';

const { locationInput, titleInput, descriptionInput, tagsInput, addLocationBtnMsg } =
  messages.components.addLocationModal.form;

interface IAddLocationModelProps {
  handleCancel: () => void;
}

const AddLocationModal: FC<IAddLocationModelProps> = ({ handleCancel }) => {
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const tags = useAppSelector(selectorTags);

  useEffect(() => {
    form.setFieldsValue({
      [tagsInput.name]: '',
    });

    form.setFieldsValue({
      [tagsInput.name]: [...tags],
    });
  }, [tags]);

  const onSubmit = () => {
    const title = form.getFieldValue(titleInput.name);
    const description = form.getFieldValue(descriptionInput.name);
    const city = form.getFieldValue(locationInput.name);
    const tagsV = form.getFieldValue(tagsInput.name);
    const obj = { title, description, city, tags: tagsV };

    dispatch(addLocationAction(obj));
    dispatch(setTagsAction([]));
    form.resetFields();
  };

  return (
    <div className="add-location-modal">
      <Form
        form={form}
        name="add-location-form"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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
          label={locationInput.label}
          name={locationInput.name}
          rules={[{ required: true, message: locationInput.placeholder }]}
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

        <Form.Item label={tagsInput.label} name={tagsInput.name}>
          {/* <Input /> */}
          <TagInput />
        </Form.Item>

        <Form.Item
          className="add-location-submit-btn"
          shouldUpdate
          wrapperCol={{ offset: 20, span: 4 }}
        >
          {({ getFieldsValue }) => {
            const {
              [titleInput.name]: titleValue,
              [locationInput.name]: coordinatesValue,
              [descriptionInput.name]: descriptionValue,
            } = getFieldsValue();

            const validation = !!(titleValue && coordinatesValue && descriptionValue);

            return (
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleCancel}
                disabled={!validation}
              >
                {addLocationBtnMsg}
              </Button>
            );
          }}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddLocationModal;
