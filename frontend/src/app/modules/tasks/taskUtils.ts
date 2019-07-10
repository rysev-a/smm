export const formatStatusMessage = status => {
  const statusMessageMap = {
    pending: 'создана',
    progress: 'в работе',
    success: 'завершена',
    fail: 'провалена',
  };
  return statusMessageMap[status];
};

export const formatTagMessge = tag => {
  const tagMessageMap = {
    content: 'Выложить контент',
    email: 'Написать письмо',
    call: 'Позвонить',
    advertisement: 'Реклама',
  };

  return tagMessageMap[tag];
};

export const getTaskStatusClassName = status => {
  const statusClassNameMap = {
    pending: 'is-info',
    progress: 'is-primary',
    success: 'is-success',
    fail: 'is-danger',
  };

  return statusClassNameMap[status];
};
