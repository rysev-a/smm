const validateTemplates = {
  name: {
    regExp: /^(.){6,64}$/,
    message: 'POST_NAME_WRONG_FORMAT',
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
