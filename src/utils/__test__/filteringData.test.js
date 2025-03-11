import { describe, expect, test } from "@jest/globals";
import { filteringData } from "../filteringData";

const data = [
  {
    id: "357901",
    district_code: "35.79.01",
    city_code: "35.79",
    province_code: "35",
    district_name: "Batu",
    city_type: "Kota",
    city_name: "Batu",
    province_name: "Jawa Timur",
    full_name: "Kec. Batu, Kota Batu, Jawa Timur",
    keywords: "batu batu jawa timur",
  },
  {
    id: "357902",
    district_code: "35.79.02",
    city_code: "35.79",
    province_code: "35",
    district_name: "Bumiaji",
    city_type: "Kota",
    city_name: "Batu",
    province_name: "Jawa Timur",
    full_name: "Kec. Bumiaji, Kota Batu, Jawa Timur",
    keywords: "bumiaji batu jawa timur",
  },
  {
    id: "350722",
    district_code: "35.07.22",
    city_code: "35.07",
    province_code: "35",
    district_name: "Dau",
    city_type: "Kabupaten",
    city_name: "Malang",
    province_name: "Jawa Timur",
    full_name: "Kec. Dau, Kab. Malang, Jawa Timur",
    keywords: "dau malang jawa timur",
  },
  {
    id: "210206",
    district_code: "21.02.06",
    city_code: "21.02",
    province_code: "21",
    district_name: "Buru",
    city_type: "Kabupaten",
    city_name: "Karimun",
    province_name: "Kepulauan Riau",
    full_name: "Kec. Buru, Kab. Karimun, Kepulauan Riau",
    keywords: "buru karimun kepulauan riau",
  },
  {
    id: "320931",
    district_code: "32.09.31",
    city_code: "32.09",
    province_code: "32",
    district_name: "Depok",
    city_type: "Kabupaten",
    city_name: "Cirebon",
    province_name: "Jawa Barat",
    full_name: "Kec. Depok, Kab. Cirebon, Jawa Barat",
    keywords: "depok cirebon jawa barat",
  },
];

describe("Filtering Data module", () => {
  test("check result of filter function correctly", () => {
    const expectedResult = [
      {
        id: "357901",
        district_code: "35.79.01",
        city_code: "35.79",
        province_code: "35",
        district_name: "Batu",
        city_type: "Kota",
        city_name: "Batu",
        province_name: "Jawa Timur",
        full_name: "Kec. Batu, Kota Batu, Jawa Timur",
        keywords: "batu batu jawa timur",
      },
      {
        id: "350722",
        city_code: "35.07",
        city_name: "Malang",
        city_type: "Kabupaten",
        district_code: "35.07.22",
        district_name: "Dau",
        full_name: "Kec. Dau, Kab. Malang, Jawa Timur",
        keywords: "dau malang jawa timur",
        province_code: "35",
        province_name: "Jawa Timur",
      },
      {
        id: "357902",
        district_code: "35.79.02",
        city_code: "35.79",
        province_code: "35",
        district_name: "Bumiaji",
        city_type: "Kota",
        city_name: "Batu",
        province_name: "Jawa Timur",
        full_name: "Kec. Bumiaji, Kota Batu, Jawa Timur",
        keywords: "bumiaji batu jawa timur",
      },
      {
        id: "210206",
        city_code: "21.02",
        city_name: "Karimun",
        city_type: "Kabupaten",
        district_code: "21.02.06",
        district_name: "Buru",
        full_name: "Kec. Buru, Kab. Karimun, Kepulauan Riau",
        keywords: "buru karimun kepulauan riau",
        province_code: "21",
        province_name: "Kepulauan Riau",
      }
    ];
    expect(filteringData(data, "bau")).toStrictEqual(expectedResult);
  });

  test('should return empty array when no matches found', () => {
    const result = filteringData(data, 'Jakarta');
    expect(result).toEqual([]);
  });

  test('should return exact district match first', () => {
    const result = filteringData(data, 'Batu');
    expect(result[0].district_name).toBe('Batu');
  });

  test('should return results for partial district match', () => {
    const result = filteringData(data, 'Bum');
    expect(result[0].district_name).toBe('Buru');
  });

  test('should return results for city match', () => {
    const result = filteringData(data, 'Batu');
    expect(result.length).toBe(4);
  });

  test('should return results for province match', () => {
    const result = filteringData(data, 'Jawa Timur');
    expect(result.length).toBe(4);
  });

  test('should return results for keyword match', () => {
    const result = filteringData(data, 'batu jawa');
    expect(result.length).toBe(4);
  });

  test('should prioritize keyword matches over other matches', () => {
    const result = filteringData(data, 'batu jawa timur');
    expect(result.length).toBe(4);
  });

  test('should handle typos with Levenshtein distance', () => {
    const result = filteringData(data, 'Batuu');
    expect(result[0].district_name).toBe('Batu');
  });

  test('should return empty array for empty search string', () => {
    const result = filteringData(data, '');
    expect(result).toEqual([]);
  });

  test('should return empty array for empty data', () => {
    const result = filteringData([], 'Batu');
    expect(result).toEqual([]);
  });
});
