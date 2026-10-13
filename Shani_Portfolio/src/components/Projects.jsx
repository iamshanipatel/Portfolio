import ProjectCard from "./ProjectCard";
import "./projects.css";

function Projects({projects}){
    return(
        <section className="secion projects" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Things I've build click through to see the code or try them live.
                </p>

                <div className="projects-grid">
                    {projects.map((project)=>(
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects;