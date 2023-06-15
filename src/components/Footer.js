import styled from "styled-components";
import {LuMail} from "react-icons/lu";
import {BsTelephone, BsLinkedin} from "react-icons/bs";


const Footer = () => {
    return (
        <Wrapper className="fixed-bottom">
            <div className="container-fluid container-md">

                <div className="row ">
                
                    <div className="col-1 mx-auto">
                        <div className=" text-center pt-3">
                            
                         
                                {/* <h5 className="card-title">singh.sandip154@gmail.com</h5> */}
                                <a className="card-title" href="mailto:singh.sandip154@gmail.com">
                                    <LuMail className="card-img" size={35}/>
                                </a>
                            
                        </div>
                    </div>

                    <div className="col-1 mx-auto">
                        <div className=" text-center pt-3">
                            
                            
                                <a className="card-title" href="tel:+919373180292"><BsTelephone className="card-img" size={32}/></a>
                            
                        </div>
                    </div>

                    <div className="col-1 mx-auto">
                        <div className=" text-center pt-3 mt-2">
                            
                            
                                <a className="card-title" href="https://www.linkedin.com/in/enggsandipsingh" target="_blank" rel="noreferrer"><BsLinkedin className="card-img" size={32}/></a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </Wrapper>

    );
};


const Wrapper = styled.footer`
    margin-top: 3.125rem; 
    padding-bottom: 12px;
    width: 100vw;
    color: var(--l2);
    background-color: var(--d3);

    .card-img {
        
        width: 32px;

        :hover {
            color: var(--highlight);
        }
    }
    
`;



export default Footer;