import React from 'react';
import { EU_Parties } from '../data.js';
import StaticPartiesTable from './StaticPartyTable.js'; // Corrigido import para default export

const About = () => {
  return (
    <div style={{  fontFamily: 'Arial, sans-serif' }}>

      {/* Tabela dinâmica de totais */}
      <h2 style={{ marginTop: '40px'}}>Updated European Parliament seats</h2>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ marginBottom: '40px' }}>
        <thead>
          <tr>
            <th>Party</th>
            <th>Total Seats</th>
          </tr>
        </thead>
        <tbody>
          {EU_Parties.map((party) => (
            <tr key={party.id}>
              <td>{party.name}</td>
              <td style={{ textAlign: 'center' }}>{party.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
            <StaticPartiesTable />
    </div>
  );
};

export default About;
