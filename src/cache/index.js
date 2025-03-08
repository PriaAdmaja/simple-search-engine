import db from "../config/pg.js";
import { filteringData } from "../utils/filteringData.js";

const tableName = "locations";
let citiesCache = [];

export const loadDBDataToCache = async () => {
  try {
    console.log("Fetching data from DB...");

    const { rows } = await db.query(`SELECT * FROM ${tableName}`);
    citiesCache = rows;

    console.log("Data is ready");
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const dataReady = () => citiesCache.length > 0;

export const getData = (search) => {
  if (search) {
    return filteringData(citiesCache, search);
  }
  return undefined;
};
