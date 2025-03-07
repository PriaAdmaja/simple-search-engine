import db from "../config/pg.js";
const tableName = "locations";
let citiesCache = [];

export const loadDBDataToCache = async () => {
  try {
    console.log("Fetching data from DB...");
    const { rows } = await db.query(`SELECT * FROM ${tableName}`);
    citiesCache = rows;
    console.log("Data is ready")
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const getData = () => citiesCache;
