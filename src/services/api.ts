export const fetchFlights = async () => {
  const response = await fetch(
    'https://api.spacexdata.com/v4/launches/upcoming'
  );
  const data = await response.json();
  return data;
};

export const fetchFlightDetails = async (flightId: string) => {
  const response = await fetch(
    `https://api.spacexdata.com/v4/launches/${flightId}`
  );
  const data = await response.json();
  return data;
};
