const camelCase = (text) => {
  const [text1, text2] = text.split("-");
  return `${text1}${text2[0].toUpperCase()}${text2.slice(1)}`;
};
console.log(camelCase("backgground-color"));
