import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { Tag, Input } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectorTags, setTagsAction } from '../../store/locations/locationsSlice';
import './TagInput.scss';

const TagInput: FC = () => {
  const initialState = {
    inputVisible: false,
    inputValue: '',
  };

  const [state, setState] = useState(initialState);
  const tagsState = useAppSelector(selectorTags);
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (state.inputVisible) {
      (inputRef as React.RefObject<HTMLInputElement>).current?.focus();
    }
  }, [state.inputVisible]);

  const handleClose = (removedTag: string) => {
    const tags = tagsState.filter((tag) => tag !== removedTag);

    dispatch(setTagsAction(tags));
  };

  const showInput = () => {
    setState({ ...state, inputVisible: true });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;

    if (inputValue && tagsState.indexOf(inputValue) === -1) {
      dispatch(setTagsAction([...tagsState, inputValue]));
    }

    setState({
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

  const { inputVisible, inputValue } = state;
  const tagChild = tagsState.map(forMap);

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
