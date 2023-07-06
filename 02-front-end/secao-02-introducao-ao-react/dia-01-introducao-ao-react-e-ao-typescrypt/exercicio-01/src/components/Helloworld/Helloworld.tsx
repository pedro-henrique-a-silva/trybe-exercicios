import Title from '../Title/Title';
import Moduledetails from '../Moduledetails/Moduledetails';
import calculateAge from '../../helpers/calculaIdade';

function Helloworld() {
  const idade = calculateAge('12/09/1993');
  return (
    <>
      <h1>
        Ola pedro, vi que você tem
        {' '}
        {idade}
        {' '}
        anos
      </h1>
      <Title />
      <Moduledetails />
    </>
  );
}

export default Helloworld;
