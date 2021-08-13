import React, { createContext, useState } from 'react';
import APISOURCE from '../constants/Api-Source';
import {
  ICities, IContext, IContextValue, IProvinces,
} from '../helpers/types';

export const MyContext = createContext<IContextValue>({
  provinces: [], getAllProvinces: () => {}, cities: [], getAllCityProvince: () => {}, hospitals: [], getAllHospitalsProvince: () => {},
});
const ApiContext = (props: IContext) => {
  const [provinces, setProvinces] = useState<IProvinces[]>([]);
  const [cities, setCities] = useState<ICities[]>([]);
  const [hospitals, setHospitals] = useState([]);
  const getAllProvinces = async () => {
    const listProvinces = await APISOURCE.getListProvinces();
    const options = listProvinces.map((province: IProvinces) => ({
      id: province.id,
      value: province.name,
      label: province.name,
    }));
    setProvinces(options);
  };

  const getAllCityProvince = async (id: string) => {
    const listCities = await APISOURCE.getCitiesProvinceId(id);
    const options = listCities.map((city: ICities) => ({
      id: city.id,
      value: city.name,
      label: city.name,
    }));
    setCities(options);
  };

  const getAllHospitalsProvince = async (provinceId: string, cityId: string, type: string) => {
    const listHospitals = await APISOURCE.getHospitalsProvinceId(provinceId, cityId, type);
    console.log('hos', listHospitals);
    // setHospitals(listHospitals);
  };

  const contextValue: IContextValue = {
    provinces, getAllProvinces, cities, getAllCityProvince, hospitals, getAllHospitalsProvince,
  };

  return (
    <MyContext.Provider value={contextValue}>{props.children}</MyContext.Provider>
  );
};

export default ApiContext;
