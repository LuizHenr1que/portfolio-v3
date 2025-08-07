import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { theme, themes, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentTheme = themes.find(t => t.value === theme);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="theme-selector" ref={dropdownRef}>
      <button 
        className="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        title="Alterar tema"
      >
        <span className="theme-icon">{currentTheme?.icon}</span>
      </button>
      
      {isOpen && (
        <div className="theme-selector-dropdown">
          <div className="theme-selector-content">
            <h3 className="theme-selector-title">Escolher tema</h3>
            <div className="theme-options">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    changeTheme(themeOption.value);
                    setIsOpen(false);
                  }}
                  className={`theme-option ${theme === themeOption.value ? 'active' : ''}`}
                  title={themeOption.label}
                >
                  <span className="theme-icon">{themeOption.icon}</span>
                  <span className="theme-label">{themeOption.label}</span>
                  {theme === themeOption.value && (
                    <span className="check-icon">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
