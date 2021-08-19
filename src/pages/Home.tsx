import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import CardHospital from '../components/CardHospital';
import { MyContext } from '../contexts/Api-Context';

const Home = () => {
  const [checked, setChecked] = useState('1');
  const [nameProvince, setNameProvince] = useState('');
  const [nameCity, setNameCity] = useState('');
  const [idProvince, setIdProvince] = useState('');
  const [idCity, setIdCity] = useState('');
  const {
    provinces, getAllProvinces, cities, getAllCityProvince, hospitals, getAllHospitalsProvince, isLoading,
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
        <h2 className="hero">Cari ketersediaan kamar di rumah sakit terdekat anda!</h2>
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
        <div className="card__container">
          {/* {hospitals.length !== 0 ? <h1 className="title">Daftar Kamar Rumah Sakit</h1> : <h2>Tidak</h2>} */}
          {console.log(nameCity.length)}
          {nameCity.length !== 0 && isLoading ? <h2 className="loading">Loading...</h2> : hospitals.map((hospital) => (
            <CardHospital
              key={hospital.id}
              id={hospital.id}
              name={hospital.name}
              bed_availability={hospital.bed_availability}
              info={hospital.info}
              phone={hospital.phone}
              address={hospital.address}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
