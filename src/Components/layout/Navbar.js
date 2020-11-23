import React from 'react'

 const Navbar = (/*props*/ {icon, title}) =>{
    Navbar.defaultProps = {
        title: "GitHub Finder" ,
        icon :"fab fa-github"
    }
    
        return (
            <navbar className="navbar bg-primary">
                <h1> 
                {/* <i className={props.icon} />{props.title} */}
                    <i className={icon} />{title}
                </h1>
            </navbar>
        );
}

export default Navbar
