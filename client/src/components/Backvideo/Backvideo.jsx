
import '../Backvideo/Backvideo_style.css';

function Backvideo() {
  


  return (
    <>
      <video autoPlay muted loop className='backvideo'>
        <source src="/video/game1.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Backvideo;
