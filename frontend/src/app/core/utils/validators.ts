const validateTemplates = {
  email: {
    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Неверный формат email',
  },
  first_name: {
    regExp: /^[A-Za-zА-Яа-я\-]{1,64}$/,
    message: 'Неверный формат имени',
  },
  last_name: {
    regExp: /^[A-Za-zА-Яа-я\-]{1,64}$/,
    message: 'Неверный формат фамилии',
  },
  password: {
    regExp: /^(.){6,64}$/,
    message: 'Пароль должен быть не менее 6 символов',
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
