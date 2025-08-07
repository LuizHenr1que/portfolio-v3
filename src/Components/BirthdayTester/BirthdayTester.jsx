import { useState } from 'react';
import Confetti from '../Confetti/Confetti';
import BirthdayMessage from '../BirthdayMessage/BirthdayMessage';
import useBirthday from '../../hooks/useBirthday';

const BirthdayTester = () => {
  const [showTest, setShowTest] = useState(false);
  const { age } = useBirthday('2001-08-14');
  
  const testBirthday = () => {
    setShowTest(true);
    setTimeout(() => setShowTest(false), 10000);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={testBirthday}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
      >
        🎂 Testar Aniversário
      </button>
      
      <Confetti show={showTest} duration={8000} />
      <BirthdayMessage show={showTest} age={age} />
    </div>
  );
};

export default BirthdayTester;
