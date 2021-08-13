import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { MyContext } from '../contexts/Api-Context';

const Home = () => {
  const [checked, setChecked] = useState('1');
  const [nameProvince, setNameProvince] = useState('');
  const [nameCity, setNameCity] = useState('');
  const [idProvince, setIdProvince] = useState('');
  const [idCity, setIdCity] = useState('');
  const {
    provinces, getAllProvinces, cities, getAllCityProvince, hospitals, getAllHospitalsProvince,
  } = useContext(MyContext);

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
  };

  const handleChangeProvincesSelect = (e: any) => {
    setNameProvince(e.label);
    setIdProvince(e.id);
  };

  const handleChangeCitiesSelect = (e: any) => {
    setNameCity(e.label);
    setIdCity(e.id);
  };

  const handleSubmit = () => {
    console.log(idProvince + idCity + checked);
    getAllHospitalsProvince(idProvince, idCity, checked);
  };

  useEffect(() => {
    getAllProvinces();
    if (idProvince !== '') {
      getAllCityProvince(idProvince);
    }
  }, [idProvince]);

  return (
    <main>
      <div className="content">
        <h2 className="hero">Cari rumah sakit terdekat anda!</h2>
        <h3>Pilih Provinsi</h3>
        <Select
          options={provinces}
          placeholder="Pilih Provinsi ..."
          noOptionsMessage={({ inputValue: string }) => 'Provinsi tidak ditemukan ...'}
          className="select"
          onChange={(e) => handleChangeProvincesSelect(e)}
        />
        <h3>Pilih Kab/Kota</h3>
        {
          idProvince === ''
            ? (
              <Select
                options={cities}
                placeholder="Pilih provinsi dulu ya..."
                noOptionsMessage={({ inputValue: string }) => 'Kabupaten/Kota tidak ditemukan ...'}
                className="select"
                isDisabled
              />
            ) : (
              <Select
                options={cities}
                placeholder="Pilih kota..."
                noOptionsMessage={({ inputValue: string }) => 'Kabupaten/Kota tidak ditemukan ...'}
                className="select"
                onChange={(e) => handleChangeCitiesSelect(e)}
              />
            )
        }
        <div className="container__radio">
          <h3>Pilih Tempat Tidur</h3>
          <div>
            <input defaultChecked type="radio" value="1" name="bed" onChange={(e) => handleChangeRadio(e)} /> Covid19
            <input type="radio" value="2" name="bed" onChange={(e) => handleChangeRadio(e)} /> Bukan Covid19
          </div>
        </div>
        <button className="primary__button" type="button" onClick={handleSubmit}>Cari ...</button>
        <p>You have selected <strong>{nameProvince}</strong> witch city <strong>{nameCity}</strong> and type id {checked}</p>
      </div>
    </main>
  );
};

export default Home;
