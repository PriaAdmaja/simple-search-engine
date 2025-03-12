import { score } from "./score.js";
import { sortingDataScore } from "./sortingDataScore.js";

// data example =
// [{
//     "id": "110108",
//     "district_code": "11.01.08",
//     "city_code": "11.01",
//     "province_code": "11",
//     "district_name": "Tapaktuan",
//     "city_type": "Kabupaten",
//     "city_name": "Aceh Selatan",
//     "province_name": "Aceh",
//     "full_name": "Kec. Tapaktuan, Kab. Aceh Selatan, Aceh",
//     "keywords": "tapaktuan aceh selatan aceh",
//     "timezone": "Asia/Jakarta",
//     "is_active": true,
//     "ninja_l2_code": "ID_B00005_01",
//     "created_at": "2025-02-09T12:21:04.000Z",
//     "updated_at": "2025-02-09T12:21:04.000Z"
//     }]

export function filteringData(data, search) {
  // return empty array if search is empty string
  if (search === "") return [];

  return (
    data
    .map((datum) => {
        // set score
        const district = score(datum.district_name, search);
        const city = score(datum.city_name, search);
        const province = score(datum.province_name, search);

        return {
          datum,
          dataScore: [district, city, province],
        };
      })

      // filtring score, disallow unmatch value (all score === 5)
      .filter(({ dataScore }) => !dataScore.every((d) => d.level === 5))

      // sort
      .sort(sortingDataScore)

      // returning original data
      // .map(({ datum }) => datum)

      // returning score
      // .map((data) => data.dataScore)

      // returning full name
      .map(({ datum }) => datum.full_name)

      // show max 30 data
      .slice(0, 30)
  );
}
