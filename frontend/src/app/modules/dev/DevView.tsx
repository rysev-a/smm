import { style } from 'typestyle';
import { observer } from 'inferno-mobx';

const devClassName = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  zIndex: 35,
  padding: 10,
  opacity: 0.5,
  $nest: {
    '&:hover': {
      opacity: 1,
    },
  },
});

const DevView = ({ devModel: { generate, clear } }) => (
  <div className={`${devClassName} card`}>
    <div className="buttons">
      <a className="button is-primary is-small" onClick={clear}>
        clear
      </a>
      <a className="button is-primary is-small" onClick={generate}>
        generate
      </a>
    </div>
  </div>
);

export default observer(DevView);
