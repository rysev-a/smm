import { Component } from 'inferno';
import Processing from 'app/ui/Processing';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';
import AsyncSelect from 'app/ui/AsyncSelect';

interface PostCreateViewProps {
  postCreateForm: any;
  match: any;
}

const PostCreateField = FieldFactory('postCreateForm');

class TaskCreateView extends Component<PostCreateViewProps> {
  componentWillUnmount() {
    this.props.postCreateForm.reset();
  }

  render() {
    const {
      postCreateForm: {
        handleSubmit,
        getSocialAccountLabel,
        loadSocialAccountOptions,
        updateSocialAccount,
        socialAccountOptions,
        processing,
        isDisabled,
        values,
      },
    } = this.props;

    return (
      <div className="create-post">
        <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
          Создать новый пост
        </h1>

        <form className="post-form" onSubmit={handleSubmit}>
          <Processing processing={processing} />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Название</label>
                <PostCreateField control="input" field="name" />
              </div>
              <div className="field">
                <label className="label">Описание</label>
                <PostCreateField control="textarea" field="description" />
              </div>
              <div className="field">
                <label className="label">Содержимое</label>
                <PostCreateField control="textarea" field="content" />
              </div>
            </div>

            <div className="field">
              <label className="label">Аккаунт для поста</label>
              <AsyncSelect
                isMulti={false}
                getLabel={getSocialAccountLabel}
                values={values['socialAccount']}
                update={updateSocialAccount}
                options={socialAccountOptions.items}
                loadOptions={loadSocialAccountOptions}
                name="socialAccount"
              />
            </div>

            <div className="column"></div>
          </div>
          <button
            className="button is-primary"
            type="submit"
            disabled={isDisabled}>
            Создать
          </button>
        </form>
      </div>
    );
  }
}

export default TaskCreateView;
