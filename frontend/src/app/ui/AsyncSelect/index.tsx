import { Component } from 'inferno';
import classNames from 'classnames';
import { map, pipe, filter, includes } from 'ramda';
import AsyncSelectOptions from './AsyncSelectOptions';

import {
  optionsClassName,
  getInputClassName,
  valueClassName,
  getControlClassName,
} from './AsyncSelectClassNames';

interface AsyncSelectProps {
  loadOptions(query): void;
  update(values): void;
  getLabel(option): any;
  options: any[];
  values: any[];
}

interface AsyncSelectState {
  inputValue: '';
  isOpen: boolean;
}

class AsyncSelect extends Component<AsyncSelectProps, AsyncSelectState> {
  inputRef: any;

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isOpen: false,
    };
    this.inputRef = null;
  }

  onInputChange = e => {
    this.setState({ inputValue: e.target.value });
    this.props.loadOptions(this.state.inputValue);
  };

  componentDidMount() {
    this.props.loadOptions(this.state.inputValue);
  }

  onOptionClick = optionValue => {
    this.props.update([...this.props.values, optionValue]);
    this.closeMenu();
    this.setState({ inputValue: '' });
  };

  onInputFocus = () => {
    this.setState({ isOpen: true });
    this.props.loadOptions(this.state.inputValue);
  };

  onInputBlur = () => {
    setTimeout(this.closeMenu, 200);
  };

  openMenu = () => {
    this.setState({ isOpen: true });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  storeRef = ref => {
    this.inputRef = ref;
  };

  removeValue = removedValue => {
    this.props.update(
      filter((value: any) => value.email !== removedValue.email)(
        this.props.values
      )
    );
  };

  onInputWrapperClick = () => {
    this.openMenu();
    this.inputRef.focus();
  };

  renderValues = () => {
    return map(value => (
      <span
        class={classNames('tag is-success', valueClassName)}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          this.removeValue(value);
        }}>
        {this.props.getLabel(value)}
        <a class="delete is-small" />
      </span>
    ))(this.props.values);
  };

  optionInValues = (option: any): boolean => {
    const valueIDs = map(({ id }) => id)(this.props.values);

    if (includes(option.id, valueIDs)) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <div className="control">
        <div
          onClick={this.onInputWrapperClick}
          className={getControlClassName(this.state.isOpen)}>
          {this.renderValues()}
          <input
            ref={this.storeRef}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            className={getInputClassName()}
            name="users"
            onInput={this.onInputChange}
            value={this.state.inputValue}
          />
        </div>
        <AsyncSelectOptions
          values={this.props.values}
          options={this.props.options}
          getLabel={this.props.getLabel}
          isOpen={this.state.isOpen}
          onOptionClick={this.onOptionClick}
        />
      </div>
    );
  }
}

export default AsyncSelect;
