import classNames from 'classnames';
import { map } from 'ramda';
import { valueClassName } from './AsyncSelectClassNames';

const AsynSelectValue = ({ values, removeValue, getLabel, isMulti }) => (
  <>
    {isMulti
      ? map(value => (
          <span
            class={classNames('tag is-success', valueClassName)}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              removeValue(value);
            }}>
            {getLabel(value)}
            <a class="delete is-small" />
          </span>
        ))(values)
      : null}
  </>
);

export default AsynSelectValue;
