import { FC } from 'react';
import CommentListItem from './CommentListItem';
import { CommentType } from './interface';

type CommnetListProps = {
  comments: CommentType[];
};

const CommentList: FC<CommnetListProps> = ({ comments }) => (
  <>
    {comments.map((comment) => (
      <CommentListItem {...comment} />
    ))}
  </>
);

export default CommentList;
