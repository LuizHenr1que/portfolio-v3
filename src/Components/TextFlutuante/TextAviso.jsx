import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TextAviso() {
  const [text] = useTypewriter({
    words: ['Hello, world!','Olá, mundo!', 'Welcome to my portfolio','Bem-vindo ao meu portfólio', 'Enjoy your stay', 'Aproveite a sua estadia'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="home">
      <h1>{text}<Cursor /></h1>
    </div>
  );
}