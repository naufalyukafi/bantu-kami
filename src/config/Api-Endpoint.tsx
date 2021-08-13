import CONFIG from './index';

const API_ENDPOINT = {
  listProvinces: `${CONFIG.BASE_URL}get-provinces`,
  citiesProvinceId: (id: string) => `${CONFIG.BASE_URL}get-cities?provinceid=${id}`,
  hospitalsProvinceId: (provinceid: string, cityId: string, type: string) => `${CONFIG.BASE_URL}get-hospitals?provinceid=${provinceid}&cityid=${cityId}&type=${type}`,
  bedDetailHospital: (hospitalid: number, type: number) => `${CONFIG.BASE_URL}get-bed-detail?hospitalid=${hospitalid}&type=${type}`,
  hospitalIdMap: (hospitalid: number) => `${CONFIG.BASE_URL}get-hospital-map?hospitalid=${hospitalid}`,
};

export default API_ENDPOINT;
