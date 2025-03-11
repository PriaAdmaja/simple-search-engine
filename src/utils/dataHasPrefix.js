import { isHasPrefix } from "./isHasPrefix.js"

export const dataHasPrefix = (data, search, tolerance = 0) => {
    const district = isHasPrefix(data.district_name, search, tolerance)
    const city = isHasPrefix(data.city_name, search, tolerance)
    const province = isHasPrefix(data.province_name, search, tolerance)

    const result = [district, city, province].some(d => d)

    return result
}