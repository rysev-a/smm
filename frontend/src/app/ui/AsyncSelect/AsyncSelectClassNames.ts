import { style } from 'typestyle';

export const optionsClassName = style({
  marginTop: '8px',
  width: '100%',
  position: 'absolute',
  background: '#fff',
  boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  padding: '5px 0',
  borderRadius: '4px',
});

export const optionItemClassName = style({
  padding: '5px ',
  $nest: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

export const getInputClassName = () =>
  style({
    border: 'none',
    outline: 'none',
    display: 'inline-flex',
    fontSize: '1rem',
    height: '2.25em',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
    background: 'none',
    margin: '0 0 0 10px',
    overflow: 'auto',
    boxSizing: 'border-box',
  });

export const valueClassName = style({
  margin: '5px',
  cursor: 'pointer',
});

export const getControlClassName = isOpen =>
  style({
    borderRadius: '4px',
    color: '#363636',
    display: 'flex',
    flexWrap: 'wrap',
    height: 'auto',
    alignItems: 'baseline',
    border: '1px solid transparent',
    backgroundColor: '#fff',
    borderColor: isOpen ? '#3273dc' : '#dbdbdb',
    boxShadow: isOpen
      ? '0 0 0 0.125em rgba(50,115,220,.25)'
      : 'inset 0 1px 2px rgba(10,10,10,.1)',
  });

export const notFoundOptionsClassName = style({
  paddingLeft: '10px',
});
