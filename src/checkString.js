function checkString(stringLength, string) {
  const regex = new RegExp(
    `^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^A-Za-z0-9\\s]).{1,${stringLength}}$`
  );

  return regex.test(string);
}

export default checkString;
