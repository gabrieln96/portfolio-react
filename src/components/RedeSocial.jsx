import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/redesocial.sass';

const redeSocial = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithub/>},
    {name: "instagram", icon: <FaInstagram/>},
]

const RedeSocial = () => {
    return (
        <section id="rede-social">
            {redeSocial.map((rede) => (
                <a href="#" className="social-btn" id={rede.name} key={rede.name}>
                    {rede.icon}
                </a>
            ))}
        </section>
    )
}


export default RedeSocial