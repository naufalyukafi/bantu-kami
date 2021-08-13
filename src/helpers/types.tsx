export interface IContext {
    children: React.ReactNode;
}

export interface IProvinces {
    id: string,
    name: string
}

export interface ICities {
    id: string,
    name: string,
}

export interface IHospitals {
    id: string,
    name: string,
    address: string,
    phone: string,
    // eslint-disable-next-line camelcase
    bed_availability: number,
    info: string,
}

export interface IContextValue {
    provinces: IProvinces[];
    getAllProvinces: () => void;
    cities: ICities[];
    getAllCityProvince: (id: string) => void;
    hospitals: IHospitals[];
    getAllHospitalsProvince: (provinceId: string, cityId: string, typeId: string) => void;
}
