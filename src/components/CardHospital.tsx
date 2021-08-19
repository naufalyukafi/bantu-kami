/* eslint-disable camelcase */
import React from 'react';
import { IHospitals } from '../helpers/types';

const CardHospital = ({
  name, id, address, bed_availability, info, phone,
}: IHospitals) => (
  <div key={id} className={bed_availability === 0 ? 'card card__warning' : 'card'}>
    <div className="card__info">
      <h2 className="card__info-title">{name}</h2>
      <p className="card__info-address">{address}</p>
      <p>{info}</p>
      {phone !== null && <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer"><button type="button" className="secondary__button">{phone}</button></a>}
    </div>
    {bed_availability === 0
      ? (
        <div className="card__bed card__bed-warning">
          <p>Kamar Penuh</p>
        </div>
      )
      : (
        <div className="card__bed">
          <p>Tersedia: {bed_availability}</p>
        </div>
      )}

  </div>
);

export default CardHospital;
