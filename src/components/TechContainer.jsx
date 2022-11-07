import {DiHtml5,
        DiCss3, 
        DiJsBadge, 
        DiReact, 
        DiSass, 
        DiGit } from 'react-icons/di';

import '../styles/components/techcontainer.sass';

const tecnologias = [
    {id: "html", name:"HTML5", icon: <DiHtml5/>},
    {id: "css", name:"CSS3", icon: <DiCss3/>},
    {id: "js", name:"JavaScript", icon: <DiJsBadge/>},
    {id: "react", name:"React", icon: <DiReact/>},
    {id: "sass", name:"Sass", icon: <DiSass/>},
    {id: "git", name:"Git", icon: <DiGit/>},
];
const TechContainer = () => {
    return (
        <section classeName="tech-container">
            <h2>Tecnologia</h2>
            <div className="tech-grid">
                {tecnologias.map((tech) => (
                    <div className="tech-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tech-info">
                    <h3>{tech.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    </div>
                ))}
            </div>
            </section>
    );
};

export default TechContainer