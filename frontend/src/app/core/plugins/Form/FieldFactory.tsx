import { observer, inject } from 'inferno-mobx';
import classNames from 'classnames';
import Translate from 'app/core/plugins/Translate';
import { style } from 'typestyle';

const controlClassName = style({
  paddingBottom: '20px',
});

const errorMessageClassName = style({
  position: 'absolute',
});

const InputControl = observer(({ field, type = 'text', model }) => (
  <div className={classNames('control', controlClassName)}>
    <input
      className={classNames('input', {
        'is-danger': model.errors[field],
      })}
      type={type}
      name={field}
      value={model.values[field]}
      onInput={model.handleChange}
      onBlur={model.handleBlur}
      defaultValue={model.values[field]}
    />
    {model.errors[field] && (
      <p className={classNames('help is-danger', errorMessageClassName)}>
        <Translate>{model.errors[field]}</Translate>
      </p>
    )}
  </div>
));

export const TextAreaControl = observer(({ field, model }) => (
  <div className={classNames('control', controlClassName)}>
    <textarea
      className={classNames('textarea', {
        'is-danger': model.errors[field],
      })}
      name={field}
      onInput={model.handleChange}
      value={model.values[field]}
      onBlur={model.handleBlur}
      defaultValue={model.values[field]}
    />
    {model.errors[field] && (
      <p className={classNames('help is-danger', errorMessageClassName)}>
        <Translate>{model.errors[field]}</Translate>
      </p>
    )}
  </div>
));

const controls = {
  input: InputControl,
  textarea: TextAreaControl,
};

const FieldFactory = modelName =>
  inject(({ store }) => ({ model: store[modelName] }))(
    ({ model, field, type = 'text', control = 'input' }) => {
      const Control = controls[control];

      return <Control model={model} field={field} type={type} />;
    }
  );

export default FieldFactory;
