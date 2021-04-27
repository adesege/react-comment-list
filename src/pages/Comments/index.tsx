import CommentList from '~/components/CommentList';
import { CommentType } from '~/components/CommentList/interface';
import Input from '~/components/Input';

const Comment = () => {
  const comments: CommentType[] = [
    {
      author: 'Budha',
      createdDate: '13435447898765',
      text: 'lorem ipsum',
    },
  ];
  return (
    <>
      <CommentList comments={comments} />
      <Input placeholder="Type your comment" />
    </>
  );
};

export default Comment;
