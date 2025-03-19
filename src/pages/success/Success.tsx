import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './success.css';

const Success = () => {
  const { state } = useLocation();
  const { selectedFlight, name, age, healthProblem } = state.data;
  const [flightDetails, setFlightDetails] = useState<any>(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spacexdata.com/v4/launches/${selectedFlight}`
        );
        const data = await response.json();
        setFlightDetails(data);
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlightDetails();
  }, [selectedFlight]);

  const formatDate = (isoDate: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Date(isoDate).toLocaleDateString('pt-BR', options);
  };

  return (
    <main className="main-success">
      <div className="card-success">
        <h1 className="card-title">Sucesso na Reserva!</h1>
        <p className="card-paragraph">
          <strong>Nome do voo:</strong> {flightDetails?.name || 'Carregando...'}
        </p>
        <p className="card-paragraph">
          <strong>Data do lançamento:</strong>{' '}
          {flightDetails?.date_utc
            ? formatDate(flightDetails.date_utc)
            : 'Carregando...'}
        </p>
        <p className="card-paragraph">
          <strong>Nome do passageiro:</strong> {name}
        </p>
        <p className="card-paragraph">
          <strong>Idade do passageiro:</strong> {age}
        </p>
        <p className="card-paragraph">
          <strong>Problemas de saúde:</strong> {healthProblem ? 'Sim' : 'Não'}
        </p>
      </div>
    </main>
  );
};

export default Success;
