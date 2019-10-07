import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import PostCreateView from './PostCreateView';

const PostCreate = withRouter(
  inject(({ store }) => ({
    postCreateForm: store.postCreateForm,
  }))(observer(PostCreateView))
);

export default PostCreate;
