// components/SignalList.js

import React from 'react';

const SignalList = ({ signals }) => {
  return (
    <div>
      <h2>Sinais Recentes</h2>
      <ul>
        {signals.map((signal, index) => (
          <li key={index}>
            <strong>{signal.asset}</strong> - {signal.currency} às {signal.time} - {signal.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SignalList;
