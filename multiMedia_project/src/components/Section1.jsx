import '../App.css'
import song from '../assets/Singari.mp3.mp4'
export default function Section1(){
    return(
    <div class = "main-container" id = "home">
      <section className="hero">
        <div className="hero-text">
          <h1>Crispy & Juicy Burgers</h1>
          <p>
            Made fresh every day with 100% pure ingredients. Enjoy the real taste of handcrafted burgers!
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png"
            alt="Delicious Burger"
          />
        </div>
      </section>


      <section className="video-section">
        <h2 class = "video-h2">Behind the Scenes</h2>
          <video width="600"  autoPlay
        muted
        loop
        controls>
        <source
          src="https://www.pexels.com/download/video/3195650/"
          type="video/mp4"
        />
      </video>
      </section>

      <section className="audio-controls">
         <audio controls autoPlay loop>
        <source src={song} type="audio/mpeg" />
      </audio>
      </section>
      <section className="about" id = "about">
        <h2>About Us</h2>
        <p>
          At <strong>Burger Shop</strong>, we believe in serving happiness between two buns.
          Every burger is prepared with love, fresh ingredients, and the right amount of crunch!
        </p>
      </section>
    </div>
    )
}