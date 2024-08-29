import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Email from '../../Components/Email/Email';

function PageEmail() {
  useEffect(() => {
    // Inicialize o ScrollReveal e defina a configuração
    ScrollReveal().reveal(".headline", {
      duration: 900,
      distance: "50px",
      easing: "ease-in-out",
      origin: "left",
    });
  }, []);
  return (
    <div className='container-main items-start headline'>
        
      <h1 className="mb-6 titulo">
        Fale <span className="text-primary">comigo</span>.
         </h1>
        <Email/>
    </div>
  );
}

export default PageEmail;
