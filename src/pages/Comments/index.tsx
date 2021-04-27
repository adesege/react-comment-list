import { KeyboardEventHandler, useState } from 'react';
import CommentList from '~/components/CommentList';
import Input from '~/components/Input';
import { useAppDispatch } from '~/store';
import { addCommentAction } from '~/store/comment';
import useComment from '~/store/comment/useComment';

const Comment = () => {
  const [commentText, setCommentText] = useState<string>('');
  const [isFocused, setIsFocued] = useState(true);

  const dispatch = useAppDispatch();
  const { comments } = useComment();

  const onSubmitComment = async () => {
    await dispatch(addCommentAction({ text: commentText, author: 'Budha', createdDate: Date.now().toString() }));
    setCommentText('');
  };

  const onEscape = () => {
    if (isFocused) {
      setCommentText('');
    }
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    switch (event.key) {
      case 'Enter': onSubmitComment();
        break;
      case 'Escape': onEscape();
        break;
      default:
    }
  };

  return (
    <>
      <CommentList comments={comments} />
      <Input
        placeholder="Type your comment"
        onChange={(event) => setCommentText(event.target.value)}
        value={commentText}
        onKeyDown={onKeyDown}
        onBlur={() => setIsFocued(false)}
        onFocus={() => setIsFocued(true)}
      />
    </>
  );
};

export default Comment;
