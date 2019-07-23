import { inject, observer } from 'inferno-mobx';
import CommentListView from './CommentListView';

const CommentList = inject(({ store }) => ({
  commentList: store.commentListModel,
}))(observer(CommentListView));

export default CommentList;
