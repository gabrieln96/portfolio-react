import RedeSocial from "./RedeSocial";

import Avatar from "../img/avatar.png";

import "../styles/components/sidebar.sass";



const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Gabriel Araújo"/>
        <p className="title">Desenvolverdor</p>
        <RedeSocial/>
        <p>Informações para contato</p>
        <a href="" className="btn">
            Download Curriculo
        </a> 
   </aside>
    )
};

export default Sidebar;