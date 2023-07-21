import checkString from './checkString'

describe("Testing check function", () => {
  test('Min length of input', () => {
    expect(checkString(10, "Ma@1")).toBe(false);
  });
  test('Max length of input', () => {
    expect(checkString(10, "Martin@1234")).toBe(false);
  });
  test('Match length of input', () => {
    expect(checkString(10, "Martin@123")).toBe(true);
  });
  test('Missing uppercase of input', () => {
    expect(checkString(10, "martin@123")).toBe(false);
  });
  test('Missing lowercase of input', () => {
    expect(checkString(10, "MARTIN@123")).toBe(false);
  });
  test('Missing special symbol of input', () => {
    expect(checkString(10, "Martin1234")).toBe(false);
  });
  test('Space in input', () => {
    expect(checkString(10, "Marti @123")).toBe(false);
  });
  test('New row in input', () => {
    expect(checkString(10, "Marti\n@123")).toBe(false);
  });
  test('Horizontal Tab in input', () => {
    expect(checkString(10, "Marti\t@123")).toBe(false);
  });
  test('Vertical Tab in input', () => {
    expect(checkString(10, "Marti\v@123")).toBe(false);
  });
  test('Form feed in input', () => {
    expect(checkString(10, "Marti\f@123")).toBe(false);
  });
  test('Carriage Return in input', () => {
    expect(checkString(10, "Marti\r@123")).toBe(false);
  });
  test('Testing All special symbols in input without " ', () => {
    expect(checkString(34, "Ma1!#$%&'()*+,-./:;<=>?@[\]^_`{|}~")).toBe(true);
  });
  test('Testing " in input', () => {
    expect(checkString(10, `Martin"123`)).toBe(true);
  });
  
 })
