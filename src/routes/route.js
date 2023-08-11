import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "../components/Accueil/Index";
import Propos from "../components/Propos/Index";
import Portfolio from "../components/Portfolio/Index";
import Contact from "../components/Contact/Index";
import Video from "../components/Video/Index";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />}>
          <Route index element={<Propos />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="video" element={<Video />} />
        </Route>
  
      </Routes>
    </Router>
  );
};

export default Root;
