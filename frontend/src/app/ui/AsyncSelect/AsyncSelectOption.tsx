import { optionItemClassName } from './AsyncSelectClassNames';

const AsyncSelectOption = ({ label, value, onClick }) => (
  <div
    className={optionItemClassName}
    onClick={() => {
      onClick(value);
    }}>
    <span>{label}</span>
  </div>
);

export default AsyncSelectOption;
