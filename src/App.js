import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import Bio from "./Components/Bio";

function App() {
  return (
    <div className="container mb-10 mx-auto px-10">
      <Bio
        TituloCard="aincatoni"
        BajadaCard="Desarrollo, Diseño, ilustro, Toco Batería y Escribo"
        ImageCard="https://aincatoni.github.io/enlaces/img/foto_perfil.png"
      />
      <div className="mt-10 md:grid md:gap-y-5 md:gap-x-10 md:grid-cols-2 md:grid-rows-2">
        <Card
          ImageCard="https://aincatoni.github.io/enlaces/img/web.png"
          EnlaceCard="https://aincatoni.com"
          TituloCard="Mi sitio Web"
        />
        <Card
          ImageCard="https://aincatoni.github.io/enlaces/img/cv.png"
          EnlaceCard="https://aincatoni.com/acerca-de-mi"
          TituloCard="Mi Curriculum Online"
        />
        <Card
          ImageCard="https://aincatoni.github.io/enlaces/img/ev.jpeg"
          EnlaceCard="https://espaciovolatil.bandcamp.com/album/cuenta-regresiva"
          TituloCard="Espacio Volátil (bandcamp)"
        />
        <Card
          ImageCard="https://aincatoni.github.io/enlaces/img/blog.png"
          EnlaceCard="https://lasestrellasfugaces.aincatoni.com/"
          TituloCard="Mi Blog de Música"
        />
      </div>
    </div>
  );
}

export default App;
