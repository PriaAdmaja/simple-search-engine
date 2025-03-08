import db from "../config/pg.js";
import { filteringData } from "../utils/filteringData.js";

const tableName = "locations";
let citiesCache = [];

export const loadDBDataToCache = async () => {
  const client = await db.connect();

  try {
    console.log("Fetching data from DB...");

    const { rows } = await client.query(`SELECT * FROM ${tableName}`);
    citiesCache = rows;

    console.log("Data is ready");
  } catch (error) {
    console.error("Error fetching data:", error.message);
  } finally {
    client.release();
  }
};

export const dataReady = () => citiesCache.length > 0;

export const getData = (search) => {
  if (search) {
    return filteringData(citiesCache, search);
  }
  return undefined;
};
