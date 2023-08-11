import transport1 from '../../assets/images/transport1.jpeg';
import transport2 from '../../assets/images/transport2.jpeg';
import transport3 from '../../assets/images/transport3.jpeg';
import transport4 from '../../assets/images/transport4.jpeg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div id="contenu2">
      
    <article className="gauche">
      <h2>Notre portfolio</h2>
        <Link to="#"><img src={transport1} alt='transport1' /></Link>
        <Link to="#"><img src={transport2} alt='transport2' /></Link>
        <Link to="#"><img src={transport3} alt='transport3' /></Link>
        <Link to="#"><img src={transport4} alt='transport4' /></Link>
      
    </article>
    <div className="droite">NOS TRAVAUX</div>
  </div>
  )
}

export default Portfolio
