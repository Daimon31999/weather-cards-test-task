import { ChangeEvent, FC, useRef, useState } from 'react';
import { Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';

const TagInput: FC = () => {
  const initialState = {
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  };

  const [state, setState] = useState(initialState);
  const inputRef = useRef(null);

  const handleClose = (removedTag: string) => {
    const tags = state.tags.filter((tag) => tag !== removedTag);
    console.log(tags);
    setState({ ...state, tags });
  };

  const showInput = () => {
    (inputRef as React.RefObject<HTMLInputElement>).current?.focus();
    setState({ ...state, inputVisible: true });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const { tags, inputVisible, inputValue } = state;
  const tagChild = tags.map(forMap);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: (e) => {
              e.target.setAttribute('style', '');
            },
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} className="site-tag-plus">
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
};

export default TagInput;
