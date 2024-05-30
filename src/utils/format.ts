export const formatWholeNumber = (_num: number) => {
  return _num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const capitalizeText = (text: string) => {
  if (text.length === 0) return text;
  if (text.length === 1) return text.toUpperCase();

  const firstChar = text[0].toUpperCase();
  return firstChar + text.slice(1, text.length).toLowerCase();
};

export const formatDateTime = (_date: string) => {
  const _dateObj = new Date(_date);
  return `${_dateObj.getHours()}:${_dateObj.getMinutes()} on ${_dateObj.getDate()}/${
    _dateObj.getMonth() + 1
  }/${_dateObj.getFullYear()}`;
};
