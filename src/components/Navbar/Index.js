import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="propos" id="propos">A propos</Link></li>
        <li><Link to="portfolio" id="portfolio">portfolio</Link></li>
        <li><Link to="video" id="video">vid&eacute;o</Link></li>
        <li><Link to="contact" id="contact">contact</Link></li>
   
      </ul>
    </nav>
  )
}

export default Navbar;
