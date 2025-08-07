import PropTypes from 'prop-types';
import { FaBirthdayCake, FaGift } from 'react-icons/fa';

const BirthdayMessage = ({ show, age }) => {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg shadow-lg z-50 animate-bounce">
      <div className="flex items-center gap-3">
        <FaBirthdayCake className="text-2xl animate-pulse" />
        <div>
          <h3 className="font-bold text-lg">🎉 Feliz Aniversário!</h3>
          <p className="text-sm">Hoje faço {age} anos! 🎂</p>
        </div>
        <FaGift className="text-xl animate-pulse" />
      </div>
    </div>
  );
};

BirthdayMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  age: PropTypes.number.isRequired
};

export default BirthdayMessage;
