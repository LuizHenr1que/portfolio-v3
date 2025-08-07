import { useContext } from 'react';
import BirthdayContext from '../contexts/BirthdayContext';

export const useBirthdayContext = () => {
  const context = useContext(BirthdayContext);
  if (!context) {
    throw new Error('useBirthdayContext deve ser usado dentro de BirthdayProvider');
  }
  return context;
};
