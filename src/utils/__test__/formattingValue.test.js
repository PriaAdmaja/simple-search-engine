import { describe, expect, test } from "@jest/globals";
import { formattingValue } from "../formattingValue.js";

describe("Formatting Value module", () => {
  // Basic cases
  test("formatting 'Hello World!' to 'helloworld'", () => {
    expect(formattingValue('Hello World!')).toStrictEqual('helloworld');
  });
  test("formatting 'Ma'u2' to 'ma'u2'", () => {
    expect(formattingValue("Ma'u2")).toStrictEqual("ma'u2");
  });

  // Edge cases
  test("empty string remains empty", () => {
    expect(formattingValue('')).toStrictEqual('');
  });
  
  test("string with only special characters becomes empty", () => {
    expect(formattingValue('!@#$%^&*()')).toStrictEqual('');
  });

  // Case sensitivity
  test("uppercase letters are converted to lowercase", () => {
    expect(formattingValue('ABCDE')).toStrictEqual('abcde');
  });

  // Number handling
  test("numbers are preserved", () => {
    expect(formattingValue('123abc')).toStrictEqual('123abc');
  });

  // Special character handling
  test("apostrophes are preserved", () => {
    expect(formattingValue("don't")).toStrictEqual("don't");
  });

  // Mixed cases
  test("mixed characters with numbers and apostrophes", () => {
    expect(formattingValue("A1B'2C!3D")).toStrictEqual("a1b'2c3d");
  });

  // Whitespace handling
  test("spaces are removed", () => {
    expect(formattingValue('a b c d e')).toStrictEqual('abcde');
  });

  // Non-string input
  test("handles number input", () => {
    expect(formattingValue(123)).toStrictEqual('123');
  });
});
