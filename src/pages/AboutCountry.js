import React, { useState } from 'react';
import { EU_Countries, EU_Parties, EU_Parliament_Seats } from '../data.js';

const AboutCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const selectedSeats = EU_Parliament_Seats.find(
    (item) => item.country === selectedCountry
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

      {selectedCountry && selectedSeats ? (
        <>
          <h3 style={{ marginTop: '20px' }}>
            Seats distribution in {selectedCountry}
          </h3>
          <table border="1" cellPadding="5" cellSpacing="0">
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
                    {selectedSeats[party.name] ?? 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : selectedCountry ? (
        <p>No seat data available for {selectedCountry}.</p>
      ) : null}
    </div>
  );
};

export default AboutCountry;
