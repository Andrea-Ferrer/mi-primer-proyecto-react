import logo from './logo.svg';
import './App.css';
import { Lista, Ofrece, Final, Frase, Texto, Segundo, Primero, Etiqueta, Imagen, Boton, Iniciar, Google, Cuerpo, Buscador, Barra, Lupa, Buscar } from './styled';

function App() {
  return (
    <Cuerpo>
      <header>
        <nav>
          <Boton><Iniciar>Iniciar sesión</Iniciar></Boton>
          <Lista>Imágenes</Lista>
          <Lista>Gmail</Lista>
        </nav>
      </header>

    
      <Google>
        <img src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
      </Google>
      <Barra>
        <Buscador type="search"></Buscador>
      </Barra>
      <Lupa></Lupa> 
      <Primero>
        <Texto>Buscar con Google</Texto>
      </Primero>
      <Segundo>
        <Frase>Me siento con suerte</Frase>
      </Segundo>
      <Ofrece>
        <Final>Ofrecido por Google</Final>
      </Ofrece>
    </Cuerpo>
  
  );
}

export default App;
