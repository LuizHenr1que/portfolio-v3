import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Stack from './sections/Stack';
import Contact from './sections/Contact';

function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero />
      <Projects language={language} />
      <Experience language={language} />
      <Stack language={language} />
      <Contact language={language} />
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Luiz Henrique. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
