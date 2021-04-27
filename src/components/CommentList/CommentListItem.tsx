import { FC } from 'react';
import './CommentList.css';
import { CommentType } from './interface';

type CommentListItemProps = CommentType;

const CommentListItem: FC<CommentListItemProps> = ({ author, text, createdDate }) => (
  <div className="comment-list">
    <p className="comment-list__message">{text}</p>
    <div className="comment-list__action">
      <p className="comment-list__time">{createdDate}</p>
      <p className="comment-list__author">{author}</p>
    </div>
  </div>
);

export default CommentListItem;
