import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Confetti.css';

const Confetti = ({ show, duration = 3000 }) => {
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      
      // Criar partículas de confete
      const newParticles = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        color: getRandomColor(),
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      }));
      
      setParticles(newParticles);
      
      // Esconder após a duração especificada
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setParticles([]), 1000); // Limpar após animação
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  const getRandomColor = () => {
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57',
      '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
      '#10ac84', '#ee5a24', '#0984e3', '#6c5ce7', '#a29bfe'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (!isVisible || particles.length === 0) return null;

  return (
    <div className="confetti-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="confetti-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `rotate(${particle.rotation}deg)`,
            animationDuration: `${3 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

Confetti.propTypes = {
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number
};

export default Confetti;
