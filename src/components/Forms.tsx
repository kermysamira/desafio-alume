import React, { useState, useEffect } from 'react';
import './forms.css';

const Form = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [flights, setFlights] = useState<any[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [healthProblem, setHealthProblem] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(
          'https://api.spacexdata.com/v4/launches/upcoming'
        );
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ selectedFlight, name, age, healthProblem });
  };

  return (
    <form onSubmit={handleSubmit} className="forms">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input"
        placeholder="Nome completo"
      />
      <span className="input-border"></span>
      <input
        type="number"
        value={age}
        onChange={(e) =>
          setAge(e.target.value === '' ? '' : Number(e.target.value))
        }
        required
        className="input"
        placeholder="Idade"
      />
      <span className="input-border"></span>
      <label className="label-health">
        Possui algum problema de saúde?
        <div className="radio-container">
          <input
            type="radio"
            name="healthProblem"
            value="sim"
            checked={healthProblem === true}
            onChange={() => setHealthProblem(true)}
            id="healthProblemSim"
            className="radio-input"
          />
          <label htmlFor="healthProblemSim">
            <span className="radio-button"></span> Sim
          </label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            name="healthProblem"
            value="nao"
            checked={healthProblem === false}
            onChange={() => setHealthProblem(false)}
            id="healthProblemNao"
            className="radio-input"
          />
          <label htmlFor="healthProblemNao">
            <span className="radio-button"></span> Não
          </label>
        </div>
      </label>
      <select
        value={selectedFlight}
        onChange={(e) => setSelectedFlight(e.target.value)}
        required
        className="input"
      >
        <option value="">Selecione um voo</option>
        {flights.map((flight: any) => (
          <option key={flight.id} value={flight.id}>
            {flight.name}
          </option>
        ))}
      </select>
      <span className="input-border"></span>
      <button className="button-buy" type="submit">
        Comprar Ticket
      </button>
    </form>
  );
};

export default Form;
