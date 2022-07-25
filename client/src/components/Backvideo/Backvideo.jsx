
import '../Backvideo/Backvideo_style.css';

function Backvideo() {

  return (
    <>
      <video autoPlay muted loop="loop" className='backvideo'>
        <source src="/video/background_video.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Backvideo;
