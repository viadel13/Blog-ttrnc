import manutention from '../../assets/videos/manutention.mp4';

const Video = () => {
  return (
    <div id="contenu4">

    <article className="gauche">
      <h2>Espace Vid&eacute;o</h2>
      <video controls>

        <source src={manutention} />
        

      </video>
      
    </article>
    <div className="droite">MY BEST VIDEO</div>
  </div>
  )
}

export default Video;
