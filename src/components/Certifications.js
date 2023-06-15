// import React, {useState} from "react";
import styled from "styled-components";
import Cert from "./Cert";

const Certifications = (props) => {

    // const [show, setShow] = useState(false);

    // const ShowCert = (src) => {
    //     console.log(show);

    //     if(show === true) {
            
    //         document.querySelector('.popup-Img').style.visibility = 'hidden';
    //         setShow(false);
    //     }
    //     else{
            
    //         document.querySelector('.popup-Img').style.visibility = 'visible';
    //         document.querySelector('.popup-Img img').src = src;
            
    //         setShow(true);
    //     }
    // }

    const data = props.certificationsData;


    return (
        <Wrapper id="certifications">
            <div className="container-fluid container-md text-center" >
                <h2>Certifications</h2>
                <div className="row aa gy-3 mx-auto">
                
                    {
                        data.map((curElem, index) => {
                            
                            return <div key={index} className="col-xs-8 col-sm-8 col-md-8 col-lg-4 mx-auto ">
                            <Cert {...curElem} />
                            </div>
                        })
                    }

                </div>
            </div> 
        </Wrapper>

    );

    
}


const Wrapper = styled.section`
    margin-top: 80px;
    padding-top: 130px;
    color: var(--l4);

    h2 {
        font-size: 50px;
        margin-bottom: 60px;
    }

    .aa {
        width: 80%;
    }

    .card {
        height: 100%;
        color: var(--l1);
        background-color: var(--d2);
        cursor: pointer;

        :hover {
            
            transform: scale(1.05);
            border: 1px solid var(--highlight);
            color: var(--highlight);
            transition: all 0.3s linear;
        }
    }

    


    .popup-Img {
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        margin: auto;
        text-align: center;
        background: black;
        display: flex;
        align-items: center;
        
        visibility: hidden;

        .Img1 {
            display: block;
            margin: auto;
            width: 60%;
        }

        span {
            position: absolute;
            top: 0;
            right: 0.625rem;
            font-size: 2.5rem;
            font-weight: bolder;
            color: white;
            cursor: pointer;
            z-index: 100;
        }
        
    }
     
`;


export default Certifications;