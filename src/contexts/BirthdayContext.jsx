import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useBirthday from '../hooks/useBirthday';

const BirthdayContext = createContext();

export const BirthdayProvider = ({ children }) => {
  const { age, isBirthday } = useBirthday('2001-08-14');
  const [showBirthdayEffects, setShowBirthdayEffects] = useState(false);

  useEffect(() => {
    if (isBirthday) {
      const hasShownToday = sessionStorage.getItem(`birthday-shown-${new Date().toDateString()}`);
      
      if (!hasShownToday) {
        setShowBirthdayEffects(true);
        sessionStorage.setItem(`birthday-shown-${new Date().toDateString()}`, 'true');
        
        // Esconder mensagem após 10 segundos
        setTimeout(() => {
          setShowBirthdayEffects(false);
        }, 10000);
      }
    }
  }, [isBirthday]);

  const value = {
    age,
    isBirthday,
    showBirthdayEffects,
    setShowBirthdayEffects
  };

  return (
    <BirthdayContext.Provider value={value}>
      {children}
    </BirthdayContext.Provider>
  );
};

BirthdayProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default BirthdayContext;
