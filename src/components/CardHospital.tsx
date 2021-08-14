/* eslint-disable camelcase */
import React from 'react';
import { IHospitals } from '../helpers/types';

const CardHospital = ({
  name, id, address, bed_availability, info, phone,
}: IHospitals) => (
  <div key={id} className="card">
    <h1>{name}</h1>
    <p>Kamar Tersedia: {bed_availability}</p>
    <p>Alamat: {address}</p>
    <p>Info: {info}</p>
    <p>No Telepon: {phone}</p>
  </div>
);

export default CardHospital;
