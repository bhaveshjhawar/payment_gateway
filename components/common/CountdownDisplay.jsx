const CountdownDisplay = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <h1>{days}</h1>
      <h1>{hours}</h1>
      <h1>{minutes}</h1>
      <h1>{seconds}</h1>
    </>
  );
};

export default CountdownDisplay;
