import './App.css';
import React, { useState } from 'react';

const App = () => {
  const opciones = ['MXN', 'USD', 'EUR', 'BTC', 'ETH', 'DOGE'];

  const [deMoneda, setDeMoneda] = useState('MXN');
  const [aMoneda, setAMoneda] = useState('USD');
  const [valor, setValor] = useState(1);
  const [resultado, setResultado] = useState(valor*0.05);

  const valCambio = {
    MXN: {
      USD: 0.055,
      EUR: 0.052,
      BTC: 0.0000016,
      ETH: 0.00003,
      DOGE: 0.828203,
      },
    USD:{
      MXN: 18.26,
      EUR: 0.95,
      BTC: 0.000029,
      ETH: 0.00057,
      DOGE: 15.2157,
    },
    EUR: {
      MXN: 19.34,
      USD: 1.0587,
      BTC: 0.00003139,
      ETH: 0.000598,
      DOGE: 16.1074,
    },
    BTC: {
      MXN: 615300.83,
      USD: 33666.63,
      EUR: 31801.55,
      ETH: 19.0435,
      DOGE: 512301.82,
    },
    ETH: {
      MXN: 32274.94,
      USD: 1766.18,
      EUR: 1669.12,
      BTC: 0.05251,
      DOGE: 26909.31,
    },
    DOGE: {
      MXN: 1.19,
      USD: 0.0656,
      EUR: 0.0619,
      BTC: 0.000001954,
      ETH: 0.00003723,
    },
  };

  const handleConversion = () => {
    const cambio = valCambio[deMoneda][aMoneda];
    setResultado((valor * cambio).toFixed(2));
  };

  return (
    <div className="calculadora-divisas">
      <h1>Calculadora de Divisas</h1>
      <div className="formato-moneda">
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="0"
        />
        <select value={deMoneda} onChange={(e) => setDeMoneda(e.target.value)}>
          {opciones.map((moneda) => (
            <option key={moneda} value={moneda}>
              {moneda}
            </option>
          ))}
        </select>
        <div className="igual">=</div>
        <div className="valor-convertido">
          {resultado} {aMoneda}
        </div>
        <select value={aMoneda} onChange={(e) => setAMoneda(e.target.value)}>
          {opciones.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={handleConversion}>Convertir</button>
      </div>
    </div>
  );
};

export default App;
