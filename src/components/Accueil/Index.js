import Navbar from "../Navbar/Index";
import { Outlet } from "react-router-dom";

const Accueil = () => {
  return (
    <div id="conteneur">
      <header>
        <h1>Bienvenue à TTNRC Sarl</h1>
        <Navbar />
        <div id="contenu">
          <Outlet />
        </div>
      </header>
    </div>
  );
};

export default Accueil;
