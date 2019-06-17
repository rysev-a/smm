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

const FormControl = observer(({ field, type = 'text', formModel }) => (
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

const FormControlFactory = (formModel: any) => ({ field, type = 'text' }) => (
  <FormControl formModel={formModel} field={field} type={type} />
);

export default FormControlFactory;
