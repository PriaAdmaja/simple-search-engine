import { describe, expect, test } from "@jest/globals";
import { distance } from "../utils/levenhsteinDistance";

describe("Levenshtein distance module", () => {
  test("calculates distance between 'kitten' and 'sitting' correctly", () => {
    expect(distance('kitten', 'sitting')).toBe(3);
  });
});
