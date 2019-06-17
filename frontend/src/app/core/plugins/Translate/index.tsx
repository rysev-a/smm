const RU = {
  EMAIL_NOT_FOUND: 'Почта не найдена',
  PASSWORD_INCORRECT: 'Неверный пароль',
  EMAIL_WRONG_FORMAT: 'Неверный формат email',
  FIRST_NAME_WRONG_FORMAT: 'Неверный формат имени',
  LAST_NAME_WRONG_FORMAT: 'Неверный формат фамилии',
  EMAIL_IS_ALREADY_EXIST: 'Данный email занят',
  PASSWORD_LESS_SIX_SYMBOLS: 'Пароль менее 6 символов',
};

const EN = {
  EMAIL_NOT_FOUND: 'Email not found',
  EMAIL_WRONG_FORMAT: 'Email wrong format',
  PASSWORD_INCORRECT: 'Password incorrect',
};

const langs = { RU, EN };

const Translate = ({ lang = 'RU', children }) => {
  const texts = langs[lang];
  return texts[children] || children;
};

export default Translate;
