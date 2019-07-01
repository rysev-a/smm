import { map, filter, includes, not } from 'ramda';
import AsyncSelectOption from './AsyncSelectOption';
import {
  optionsClassName,
  notFoundOptionsClassName,
} from './AsyncSelectClassNames';

const filterOptions = (options, values) => {
  const valueIDs = map(({ id }) => id)(values);

  const optionInValues = (option: any): boolean =>
    not(includes(option.id, valueIDs));

  return filter(optionInValues)(options);
};

const AsyncSelectOptions = ({
  options,
  values,
  isOpen,
  getLabel,
  onOptionClick,
}) => {
  const filteredOptions = filterOptions(options, values);

  if (!isOpen) {
    return null;
  }

  if (filteredOptions.length === 0) {
    return (
      <div className={optionsClassName}>
        <div className={notFoundOptionsClassName}>Нет подходящих вариантов</div>
      </div>
    );
  }

  return (
    <div className={optionsClassName}>
      {map((option: any) => (
        <AsyncSelectOption
          onClick={onOptionClick}
          label={getLabel(option)}
          value={option}
        />
      ))(filteredOptions)}
    </div>
  );
};

export default AsyncSelectOptions;
