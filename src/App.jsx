import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IconFlutuante from "./Components/IconFlutuante/IconFlutuante";
import SidebarMobile from "./Components/Sidebar/SidebarMobile/SidebarMobile";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/Projetos/ProjetoDetails/ProjetoDetails";
import { Sobre } from "./pages/Sobre/Sobre";
import { Formacao } from "./pages/Formacao/Formacao";
import PageEmail from "./pages/PageEmail/PageEmail";

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio-v3">
        <IconFlutuante />
        <SidebarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProjectDetails />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/email" element={<PageEmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
