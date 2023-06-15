
import styled from "styled-components";
import { BsFillTelephoneFill, BsLinkedin} from "react-icons/bs";
import {MdMail} from "react-icons/md";

const Contact = () => {
    return (
        <Wrapper id="contact">
            <div className="container-fluid container-md text-center" >
                <h2>Contact Me</h2>
                <p>
                    Let's come together and make something surreal.
                </p>

                <div className="row gy-3 mx-auto">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-4 mx-auto">
                        <div className="card text-center pt-3">
                            <div className="card-body">
                                <MdMail className="card-img" size={35}/>
                                <a className="card-title" href="mailto:singh.sandip154@gmail.com">aishwaryamokashi46@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-4 mx-auto">
                        <div className="card text-center pt-3">
                            <div className="card-body">
                                <BsFillTelephoneFill className="card-img" size={32}/>
                                <a className="card-title" href="tel:+919373180292">(+91) 7775055656</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-4 mx-auto">
                        <div className="card  text-center pt-3">
                            
                            <div className="card-body">
                                <BsLinkedin className="card-img" size={32}/>
                                <a className="card-title" href="https://www.linkedin.com/in/enggsandipsingh" target="_blank" rel="noreferrer">https://www.linkedin.com/in/aishwarya-mokashi-3755381a6</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`

    margin-top: 80px;
    padding-top: 80px;
    padding-bottom: 160px;
    margin-bottom: 100px;
    color: var(--l4);

    .row {
        width: 80%;
        
    }

    h2 {
        font-size: 50px;
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 60px;
        color: var(--l2);
    }
     

    

    .card {
        border-radius: 10px;
        background-color: var(--d2);
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
        
        a {
            visibility: hidden;
        }

        :hover {
            background-color: var(--d3);
            
            a{  
                visibility: visible;
                color: var(--highlight);
            }
        }

        .card-img {
            color: var(--highlight);
        }

        a {
            text-decoration: none;
            font-size: 12px;
            font-weight: bold;
            color: var(--l3);
        }

        

        
    }

    
`;

export default Contact;