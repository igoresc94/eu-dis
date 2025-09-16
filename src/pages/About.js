import React from 'react';
import { EU_Parties } from '../data.js';
import StaticPartiesTable from './StaticPartyTable.js'; // Corrigido import para default export

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Tabela estática acima */}
      <StaticPartiesTable />

      {/* Tabela dinâmica de totais */}
      <h2 style={{ marginTop: '40px' }}>European Parliament Seats per Party (Total)</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
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
    </div>
  );
};

export default About;
