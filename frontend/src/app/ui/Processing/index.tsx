import classNames from 'classnames';
import './index.css';

const Processing = ({ processing }) => (
  <div
    className={classNames({
      processing: true,
      active: processing,
    })}>
    <div className="ball-pulse">
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Processing;
