import { observer } from 'inferno-mobx';
import classNames from 'classnames';
import Translate from 'app/core/plugins/Translate';
import { style } from 'typestyle';

const controlClassName = style({
  paddingBottom: '20px',
});

const errorMessageClassName = style({
  position: 'absolute',
});

const InputControl = observer(({ field, type = 'text', formModel }) => (
  <div className={classNames('control', controlClassName)}>
    <input
      className={classNames('input', {
        'is-danger': formModel.errors[field],
      })}
      type={type}
      name={field}
      onKeyUp={formModel.handleChange}
      onBlur={formModel.handleBlur}
      defaultValue={formModel.values[field]}
    />
    {formModel.errors[field] && (
      <p className={classNames('help is-danger', errorMessageClassName)}>
        <Translate>{formModel.errors[field]}</Translate>
      </p>
    )}
  </div>
));

const TextAreaControl = observer(({ field, formModel }) => (
  <div className={classNames('control', controlClassName)}>
    <textarea
      className={classNames('textarea', {
        'is-danger': formModel.errors[field],
      })}
      name={field}
      onKeyUp={formModel.handleChange}
      onBlur={formModel.handleBlur}
      defaultValue={formModel.values[field]}
    />
    {formModel.errors[field] && (
      <p className={classNames('help is-danger', errorMessageClassName)}>
        <Translate>{formModel.errors[field]}</Translate>
      </p>
    )}
  </div>
));

const controls = {
  input: InputControl,
  textarea: TextAreaControl,
};

const FormControlFactory = (formModel: any) => ({
  field,
  type = 'text',
  control = 'input',
}) => {
  const Control = controls[control];
  return <Control formModel={formModel} field={field} type={type} />;
};

export default FormControlFactory;
