import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Email() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function SendEmail(e) {
    e.preventDefault();
    
    if (name === '' || email === '' || message === '') {
      toast.error("Preencha todos os campos");
      return;
    }
    
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send("service_2pbvd4d", "template_zmybmml", templateParams, "6CXo3je7_7i1zM9om")
      .then((response) => {
        console.log("Email enviado com sucesso!", response.status, response.text);
        toast.success("Email enviado com sucesso!");
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        toast.error("Erro ao enviar o email");
        console.log("ERRO:", err);
      });
  }

  return (
    <div className="items-start w-full">
      <form className="w-full flex flex-col text-white gap-3 " onSubmit={SendEmail}>
        <input 
          className="bg-accentBg h-8 rounded-md border border-secondary px-2"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="bg-accentBg h-8 px-2 rounded-md border border-secondary"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="bg-accentBg h-24 p-2 rounded-md border border-secondary"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button_padrao h-8 rounded-md border border-secondary cursor-pointer text-white" type="submit" value="Enviar" />
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="mb-[50px]"
      />
    </div>
  );
}

export default Email;
