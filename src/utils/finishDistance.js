import { prefixScore } from "./prefixScore.js";

export const finishDistance = (data, search, maxDistance = 0) => {
  const district = prefixScore(data.district_name, search, maxDistance);
  const city = prefixScore(data.city_name, search, maxDistance);
  const province = prefixScore(data.province_name, search, maxDistance);

  const arrData = [district, city, province];

  return Math.min(...arrData);
};
