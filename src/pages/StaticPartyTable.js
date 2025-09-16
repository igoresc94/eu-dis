import React from 'react';

const StaticPartiesTable = () => {
  return (
    <div>
      <h2>Current European Union Parties</h2>
      <table style={{ borderCollapse: 'collapse', marginTop: '20px', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '5px' }}>Party</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>The Left in the European Parliament</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>40</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>Progressive Alliance of Socialists &amp; Democrats</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>148</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>Greens/European Free Alliance</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>67</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>European People's Party</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>187</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>Renew Europe</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>97</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>European Conservatives and Reformists</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>62</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '5px' }}>Identity and Democracy</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>76</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaticPartiesTable;
