import { Routes, Route } from "react-router-dom";
import "./App.css";
import IconFlutuante from "./Components/IconFlutuante/IconFlutuante";
import SidebarMobile from "./Components/Sidebar/SidebarMobile/SidebarMobile";
import GlobalBirthdayEffects from "./Components/GlobalBirthdayEffects/GlobalBirthdayEffects";
import { BirthdayProvider } from "./contexts/BirthdayContext";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/Projetos/ProjetoDetails/ProjetoDetails";
import { Sobre } from "./pages/Sobre/Sobre";
import { Formacao } from "./pages/Formacao/Formacao";
// import PageEmail from "./pages/PageEmail/PageEmail";

function App() {
  return (
    <BirthdayProvider>
      <div className="App">
        <IconFlutuante />
        <SidebarMobile />
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
  );
}

export default App;
