import "./hero.css";
function Hero() {
  return (
    <section className="hero" id ="Home">
     <div className="container hero-inner" >
       <div className="hero-text">
         <p className="hero-greeting">Hi, I'm</p>
         <h1 className="hero-name">Shani Patel</h1>
         <h2 className="hero-title">MERN Stack Developer</h2>
         <p className="hero-tagline">I build simple, fast web apps with React and Node.js and I'm looking for my first role as a full-stack developer.</p>
         <div className="hero-buttons">
         <a href="#project" className="btn btn-primary">See My projects</a>
         <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
       </div>
       

       <div className="hero-photo ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UZ4ou1Q6wYNmXkHtrCmWGJHh87CFWO0gcjRgK3FHYg&s=10" alt="Shani Patel" />
        

       </div>
     </div>
    </section>
  );
}

export default Hero;