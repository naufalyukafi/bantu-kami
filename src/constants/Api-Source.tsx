import axios from 'axios';
import API_ENDPOINT from '../config/Api-Endpoint';

class APISOURCE {
  static async getListProvinces() {
    const response = await axios.get(API_ENDPOINT.listProvinces);
    return response.data.provinces;
  }

  static async getCitiesProvinceId(id: string) {
    const response = await axios.get(API_ENDPOINT.citiesProvinceId(id));
    return response.data.cities;
  }

  static async getHospitalsProvinceId(provinceId: string, cityId: string, type: string) {
    const response = await axios.get(API_ENDPOINT.hospitalsProvinceId(provinceId, cityId, type));
    return response.data.hospitals;
  }
}

export default APISOURCE;
