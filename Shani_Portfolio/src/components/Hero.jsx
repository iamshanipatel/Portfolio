import "./Hero.css";
function Hero({profile}) {
  return (
    <section className="hero" id ="Home">
     <div className="container hero-inner" >
       <div className="hero-text">
         <p className="hero-greeting">Hi, I'm</p>
         <h1 className="hero-name">{profile.name}</h1>
         <h2 className="hero-title">{profile.title}</h2>
         <p className="hero-tagline">{profile.tagline}</p>
         <div className="hero-buttons">
         <a href="#project" className="btn btn-primary">See My projects</a>
         <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
       </div>
       

       <div className="hero-photo ">
        <img src={profile.photo} alt={profile.name} />
        
       </div>
     </div>
    </section>
  );
}

export default Hero;