import React, { useState } from 'react';
import { EU_Countries, EU_Parties, EU_Parliament_Seats, Former_Parliament_Seats } from '../data.js';

const AboutCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const currentSeats = EU_Parliament_Seats.find(
    (item) => item.country === selectedCountry
  );
  const formerSeats = Former_Parliament_Seats.find(
    (item) => item.country === selectedCountry
  );

  const renderSeatsTable = (seatsObj, label) => (
    <>
      <h3 style={{ marginTop: '20px' }}>
        {label} in {selectedCountry}
      </h3>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ marginBottom: 24 }}>
        <thead>
          <tr>
            <th>Party</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {EU_Parties.map((party) => (
            <tr key={party.id}>
              <td>{party.name}</td>
              <td style={{ textAlign: 'center' }}>
                {seatsObj?.[party.name] ?? seatsObj?.[party.seats] ?? 0}
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td style={{ textAlign: 'center' }}>
              {seatsObj?.Total ?? 0}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2>Seats by Country</h2>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      >
        <option value="">Select a country</option>
        {EU_Countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (currentSeats || formerSeats) ? (
        <>
          {currentSeats &&
            renderSeatsTable(currentSeats, 'Current seats distribution')}
          {formerSeats &&
            renderSeatsTable(formerSeats, 'Former seats distribution')}
        </>
      ) : selectedCountry ? (
        <p>No seat data available for {selectedCountry}.</p>
      ) : null}
    </div>
  );
};

export default AboutCountry;
