import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <main>
      <div className="content">
        <h2 className="hero">Cari rumah sakit terdekat anda!</h2>
        <h3>Pilih Provinsi</h3>
        <Select
          defaultValue={selectedOption}
          options={options}
          placeholder="Pilih Provinsi ..."
          noOptionsMessage={({ inputValue: string }) => 'Provinsi tidak ditemukan ...'}
          className="select"
        />
        <h3>Pilih Kab/Kota</h3>
        <Select
          defaultValue={selectedOption}
          options={options}
          placeholder="Pilih provinsi terlebih dahulu ..."
          noOptionsMessage={({ inputValue: string }) => 'Kabupaten/Kota tidak ditemukan ...'}
          className="select"
          isDisabled
        />
      </div>
    </main>
  );
};

export default Home;
