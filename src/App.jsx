import { Routes, Route } from "react-router-dom";
import "./App.css";
import IconFlutuante from "./Components/IconFlutuante/IconFlutuante";
import SidebarMobile from "./Components/Sidebar/SidebarMobile/SidebarMobile";
import GlobalBirthdayEffects from "./Components/GlobalBirthdayEffects/GlobalBirthdayEffects";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
import { BirthdayProvider } from "./contexts/BirthdayContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/Projetos/ProjetoDetails/ProjetoDetails";
import { Sobre } from "./pages/Sobre/Sobre";
import { Formacao } from "./pages/Formacao/Formacao";
// import PageEmail from "./pages/PageEmail/PageEmail";

function App() {
  return (
    <ThemeProvider>
      <BirthdayProvider>
        <div className="App">
          <IconFlutuante />
          <SidebarMobile />
          <ThemeSelector />
          <GlobalBirthdayEffects />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/formacao" element={<Formacao />} />
    {/*         //<Route path="/email" element={<PageEmail />} />*/}
          </Routes> 
        </div>
      </BirthdayProvider>
    </ThemeProvider>
  );
}

export default App;
