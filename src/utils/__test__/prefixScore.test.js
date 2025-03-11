import { describe, expect, test } from "@jest/globals";
import { prefixScore } from "../prefixScore.js";

describe("Prefix Score module", () => {
  test("check unmatch value", () => {
    expect(prefixScore('kitten', 'sitting')).toBe(10);
  });
  test("calculating between 'kepanjen' and 'kepanjenkidul' correctly", () => {
    expect(prefixScore('kepanjenkidul', 'kepanjen')).toBe(3.8);
  });
});
