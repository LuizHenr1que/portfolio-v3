import Confetti from '../Confetti/Confetti';
import BirthdayMessage from '../BirthdayMessage/BirthdayMessage';
import { useBirthdayContext } from '../../hooks/useBirthdayContext';

const GlobalBirthdayEffects = () => {
  const { age, showBirthdayEffects } = useBirthdayContext();

  return (
    <>
      <Confetti show={showBirthdayEffects} duration={8000} />
      <BirthdayMessage show={showBirthdayEffects} age={age} />
    </>
  );
};

export default GlobalBirthdayEffects;
