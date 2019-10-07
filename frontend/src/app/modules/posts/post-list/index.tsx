import { observer } from 'inferno-mobx';
import PostListView from './PostListView';
import postListModel from './PostListModel';

const PostListObservedView = observer(PostListView);
const PostList = () => <PostListObservedView postList={postListModel} />;

PostList.defaultHooks = {
  onComponentDidMount() {
    postListModel.load();
  },
};

export default PostList;
