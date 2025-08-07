import { useState, useEffect } from 'react';

const useBirthday = (birthDate) => {
  const [age, setAge] = useState(0);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birth = new Date(birthDate);
      
      let calculatedAge = today.getFullYear() - birth.getFullYear();
      const monthDifference = today.getMonth() - birth.getMonth();
      
      // Se ainda não chegou o mês do aniversário ou chegou o mês mas não o dia
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge);
      
      // Verificar se é aniversário (mesmo dia e mês)
      const isBirthdayToday = today.getDate() === birth.getDate() && 
                              today.getMonth() === birth.getMonth();
      setIsBirthday(isBirthdayToday);
    };

    calculateAge();
    
    // Atualizar a cada dia (verificar à meia-noite)
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timeout = setTimeout(() => {
      calculateAge();
      
      // Configurar intervalo diário após a primeira verificação
      const dailyInterval = setInterval(calculateAge, 24 * 60 * 60 * 1000);
      
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);
    
    return () => clearTimeout(timeout);
  }, [birthDate]);

  return { age, isBirthday };
};

export default useBirthday;
