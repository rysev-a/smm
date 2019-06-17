const validateTemplates = {
  email: {
    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'EMAIL_WRONG_FORMAT',
  },
  first_name: {
    regExp: /^[A-Za-zА-Яа-я\-]{1,64}$/,
    message: 'FIRST_NAME_WRONG_FORMAT',
  },
  last_name: {
    regExp: /^[A-Za-zА-Яа-я\-]{1,64}$/,
    message: 'LAST_NAME_WRONG_FORMAT',
  },
  password: {
    regExp: /^(.){6,64}$/,
    message: 'PASSWORD_LESS_SIX_SYMBOLS',
  },
};

export const validate = ({ name, value }) => {
  const template = validateTemplates[name];

  if (template) {
    const { regExp, message } = template;

    return regExp.test(value) ? false : message;
  }

  return false;
};
