import { useState } from "react";
import axios from 'axios';

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSumit = async (e) =>{
    e.preventDefault();
    // try {
    //   const response = await axios.post('http://127.0.0.1:5000/contact', {nom, prenom, email, message});
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
    setNom('');
    setPrenom('');
    setMessage('');
    setEmail('');
  }

  const handleReset = ()=>{
    setNom('');
    setPrenom('');
    setMessage('');
    setEmail('');
  }

  return (
    <div id="contenu3">
      <article className="gauche">
        <h2>Remplissez ce formulaire pour nous contacter</h2>
        <form onSubmit={handleSumit}>
          <p>
            <label htmlFor="nom">Nom (*): </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            <input
              type="text"
              id="nom"
              name="nom"
              value={nom}
              placeholder="Votre nom"
              onChange={(e) => setNom(e.target.value)}
            />
          </p>
          <label htmlFor="nom">Prénom (*):</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            placeholder="Votre prénom"
            onChange={(e) => setPrenom(e.target.value)}
          />
          <p>
            <label htmlFor="mail">Mail (*):</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              id="mail"
              name="mail"
              value={email}
              placeholder="Votre email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="message">Message (*):</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="reset" id="annuler" name="annuler" value="annuler" onClick={handleReset}  />
            <input type="submit" id="envoyer" name="envoyer" value="envoyer" />
          </p>
          <p>Les champs suivis du caractère (*) sont obligatoires </p>
        </form>
      </article>
      <div className="droite">CONTACTS</div>
    </div>
  );
};

export default Contact;
