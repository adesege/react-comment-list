import { useSelector } from 'react-redux';
import { CommentState } from '.';
import { RootState } from '../index';

const useComment = () => useSelector<RootState, CommentState>((state) => state.comment);

export default useComment;
