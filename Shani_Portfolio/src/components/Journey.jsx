import "./Journey.css";
function TimelineColumn({title, items}){
    return(
    <div className="timeline-column">
        <h3>{title}</h3>
        <ol className="timeline">
            {items.map((item)=>(
                <li className="timeline-item" key={item._id}>
                   <span className="timeline-duration">{item.duration}</span>
                   <h4>{item.title}</h4>
                   <p className="timeline-org">{item.organization}</p>
                   {item.duration && <p>{item.description}</p>}
                </li>
            ))}
        </ol>
    </div>
    );
}
function Journey({experiences}){
    const education = experiences.filter((item)=> item.type === "education")
    const work = experiences.filter((item)=> item.type === "experience")
    return(
        <section className="section journey" id="journey">
            <div className="container">
                <h2 className="section-title">Journey</h2>
                <p className="section-subtitle">
                    Where I' ve student and what I've worked on.
                </p>
                <div className="journey-grid">
                    <TimelineColumn title="Education" items={education}/>
                    <TimelineColumn title="Experience" items={work}/>
                </div>
            </div>

        </section>
    )
}
export default Journey;