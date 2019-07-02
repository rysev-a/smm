import { Component } from 'inferno';
import classNames from 'classnames';
import { map, pipe, filter, includes } from 'ramda';
import AsyncSelectOptions from './AsyncSelectOptions';
import AsynSelectValue from './AsyncSelectValue';

import {
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
  isMulti: boolean;
  name: string;
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
    if (this.props.isMulti) {
      this.props.update([...this.props.values, optionValue]);
      this.closeMenu();
      this.setState({ inputValue: '' });
    } else {
      this.props.update(optionValue);
      this.closeMenu();
      this.setState({ inputValue: this.props.getLabel(optionValue) });
    }
  };

  onInputFocus = () => {
    this.setState({ isOpen: true });
    this.setState({ inputValue: '' });
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

  componentDidUpdate(prevProps) {
    if (
      this.props.isMulti === false &&
      this.props.values !== prevProps.values
    ) {
      this.setState({ inputValue: this.props.getLabel(this.props.values) });
    }
  }

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
          <AsynSelectValue
            isMulti={this.props.isMulti}
            removeValue={this.removeValue}
            getLabel={this.props.getLabel}
            values={this.props.values}
          />
          <input
            ref={this.storeRef}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            className={getInputClassName()}
            name={this.props.name}
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
