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

import { distance } from "./levenhsteinDistance.js";

export function filteringData(data, search) {
  return (
    data
      // set distance
      .map((datum) => ({
        datum,
        district: distance(datum.district_name, search),
        city: distance(datum.city_name, search),
        province: distance(datum.province_name, search),
      }))

      // filtring distance is not more than 2
      .filter(
        ({ district, city, province }) =>
          Math.min(district, city, province) <= 2
      )

      // sort
      .sort((a, b) => {
        const minA = Math.min(a.district, a.city, a.province);
        const minB = Math.min(b.district, b.city, b.province);
        // check distance value first
        if (minA !== minB) return minA - minB;
        // then sort by priority of distric, city, or province
        if (a.district !== b.district) return a.district - b.district;
        if (a.city !== b.city) return a.city - b.city;
        return a.province - b.province;
      })

      // returning original data
      .map(({ datum }) => datum)
  );
}
