import { describe, expect, test } from "@jest/globals";
import { isHasPrefix } from "../isHasPrefix.js";

describe("Is Has Prefix module", () => {
  test("check no prefix value", () => {
    expect(isHasPrefix('kitten', 'sitting')).toBeFalsy();
  });
  test("check has prefix value", () => {
    expect(isHasPrefix('kepanjenkidul', 'kepanjen')).toBeTruthy();
  });
  test("check has prefix value with tolerance", () => {
    expect(isHasPrefix('kepanjenkidul', 'kepanjer', 1)).toBeTruthy();
  });
});
