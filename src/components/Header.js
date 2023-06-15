import React, {useState, useEffect} from "react";
import styled from "styled-components";
import resume from "../Images/Resume.pdf";
import { TbHexagonLetterA } from "react-icons/tb";

const Header = () => {

    const [theme, setTheme] = useState("dark-theme");
    const [menuShow, setMenuShow ] = useState(false);

    const toggleTheme = () => {
        (theme === "light-theme") ? setTheme("dark-theme") : setTheme("light-theme");
        };

    const toggleShowMenu = () => {
        (menuShow === false) ? setMenuShow(true) : setMenuShow(false) ;
    }


    const toggleCloseMenu = () => {
        if(menuShow === true){
            document.getElementById("hamburger-icon").click();
            // document.getElementById({hamId}).click();

        }
    }



    useEffect (() => {
        document.body.className = theme;
    }, [theme] );


    return (
        <Nav>
            <nav className="navbar navbar-expand-lg  fixed-top">

                <div className="container-fluid">
                    
                    <span className="tagName">
                        <a href="#home" className="navbar-brand fs-3 ms-5"><TbHexagonLetterA className="tagName-icon" size={72} /></a>
                    </span>

                    {/* <div className=""> */}

                        {/* button to change theme */}
                        {/* <div className="change-theme justify-content-end"> */}
                            <div className="form-check form-switch ms-auto">
                                <input className="form-check-input chkbx" type="checkbox"  id="flexSwitchCheckDefault" onClick={() => toggleTheme()} />
                            </div>
                        {/* </div> */}

                        {/*Hamburger icon*/}
                        <button 
                            className="navbar-toggler collapsed d-flex d-lg-none bg-secondary flex-column justify-content-around ml-2" 
                            type="button" 
                            id="hamburger-icon"
                            data-bs-toggle="collapse" 
                            data-bs-target="#btn"
                            onClick={() => {toggleShowMenu()}}  >          
                                        
                                    <span className={ menuShow ? "btn-close" : "navbar-toggler-icon" }></span>
                            
                        </button>

                        {/* navbar lists */}
                        
                        <div className="collapse navbar-collapse jj pe-4" id="btn">
                        
                            <ul className="navbar-nav d-flex align-items-center">
                                
                                <li className="nav-item"
                                    onClick={() => {toggleCloseMenu()}}>
                                    <a href="#home" className=" nav-link mx-4 fs-5" >Home</a>
                                </li>
                                <li className="nav-item"
                                    onClick={()=> {toggleCloseMenu()}}>
                                    <a href="#experience" className="nav-link mx-4 fs-5" >Experience</a>
                                </li>
                                <li className="nav-item"
                                    onClick={()=> {toggleCloseMenu()}}>
                                    <a href="#projects" className="nav-link mx-4 fs-5" >Projects</a>
                                </li>
                                <li className="nav-item"
                                    onClick={()=> {toggleCloseMenu()}}>
                                    <a href="#education" className="nav-link mx-4 fs-5" >Education</a>
                                </li>
                                
                                <li className="nav-item"
                                    onClick={()=> {toggleCloseMenu()}}>
                                    <a href="#certifications" className="nav-link mx-4 fs-5" >Certifications</a>
                                </li>
                                <li className="nav-item"
                                    onClick={()=> {toggleCloseMenu()}}>
                                    <a href="#contact" className="nav-link mx-4 fs-5" >Contact Me</a>
                                </li>
                                <li
                                    onClick={() => {toggleCloseMenu()}}>
                                    {/* resume download button */}
                                    <a href={resume} download={resume}>
                                        <button type="button" className="btn download-Btn rounded-pill">Download CV</button>

                                    </a>
                                </li>
                            </ul>
    
                        </div>
                </div> 
            </nav>
        </Nav>
       
    );
};

 const Nav = styled.header`
    .navbar {
        background-color: var(--d3);
        color: var(--l2);

        .nav-link {
            color: var(--l2);
        }

        .navbar-collapse{
            justify-content: end;
            flex-grow: unset;
        }
    }

    .chkbx {
        width: 50px;
        height: 25px;   
        
    }

    .tagName-icon {
        color: var(--highlight);
        
    }

    #btn {
        color: white !important;
    }

    .download-Btn {
        color: var(--highlight);
        border-color: var(--highlight);
        border-width: 2px;

        :hover {
            border-width: 3px;
            font-weight: bold;
        }
    }

    #hamburger-icon {
        margin-left: 20px;
        margin-right: 20px;
    }
 `;

export default Header;