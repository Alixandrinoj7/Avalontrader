import { useEffect, useState } from 'react';
import { database } from '../firebase/config';
import { ref, onValue } from 'firebase/database';

export default function SignalList() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const signalsRef = ref(database, 'sinais/');
    onValue(signalsRef, (snapshot) => {
      const data = snapshot.val();
      const arr = data ? Object.values(data) : [];
      setSignals(arr);
    });
  }, []);

  return (
    <ul>
      {signals.map((sinal, index) => (
        <li key={index}>
          <strong>{sinal.ativo}</strong> - {sinal.direcao} - {sinal.horario} - {sinal.assertividade}%
        </li>
      ))}
    </ul>
  );
}
