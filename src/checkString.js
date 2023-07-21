function checkString(stringLength, string) {
  const regex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-\/:-@\[-\`{-~])[A-Za-z0-9!-\/:-@\[-\`{-~]{5,${stringLength}}$`
  )

  return regex.test(string);
}

export default checkString;
