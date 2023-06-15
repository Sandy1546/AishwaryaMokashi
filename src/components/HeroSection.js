import React from "react";
import styled from "styled-components";
import {FaJava} from "react-icons/fa";
import {TbBrandCpp} from "react-icons/tb";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {SiSelenium, SiPostman} from "react-icons/si";

const HeroSection = (props) => {

    const { heroName, heroRole, heroPickUpLine, heroImgSrc } = props.heroData;

    return (
        <Wrapper id="home" >
            <div className="container-fluid container-md aa">
                <div className="row aaa gx-5">
                    <div className="qaqa col-xs-8 col-sm-8 col-md-8 col-lg-6 mx-auto ">
                        <div className="detail">
                            <p>Hello, I am </p>
                            <h1> {heroName}</h1>
                            <h5>{heroRole}</h5>
                            <h6>
                                {heroPickUpLine}
                            </h6>
                            <h6>Technologies  &nbsp; 
                                <span className="tech-icon">
                                    <SiSelenium size={32}/> &nbsp;
                                    <FaJava size={32}/> &nbsp;
                                    <TbBrandCpp size={32}/> &nbsp;
                                    <AiOutlineConsoleSql size={32}/> &nbsp;
                                    <SiPostman size={32}/>
                                    <i class="cib-adobe-xd"></i>
                                </span>
                            </h6>
                        </div>
                    </div>

                    <div className="qaqa col-xs-8 col-sm-8 col-md-8 col-lg-6 mx-auto d-flex align-items-center">
                        <div className="hero-Img">
                            <figure >

                                <img  src={heroImgSrc} className="img-fluid img" alt="hero "/>

                            </figure>
                        </div>    
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    margin-top: 30px;
    padding-top: 80px;
    width: 80%;
    margin: auto;
    z-index: 999;
    color: var(--l4);

    .tech-icon {
        color: var(--highlight);
    }
    
    .aa {
        margin-top: 3.75rem;

        .row {
            width: 100%;
            margin: auto;

            p {
                color: var(--highlight);
            }

            h1 {
                margin-top: 1.25rem;
                font-size: 2.7rem;
            }

            h5 {
                margin-top: 0.938rem;
                font-size: 2.2rem;
                color: var(--l1);
            }

            h6 {
                margin-top: 2.5rem;
                font-size: 1.25rem;
                text-align: justify;
                font-size: 24px;
                color: var(--l2);
                
                span {
                    text-align: -webkit-center;
                    
                }
            }

            img {
                border-radius: 10px;
                max-width: 450px;
                
                
            }

            .detail {
                padding-left: 5px;
                padding-bottom: 0.5rem;
                height: 100%;
                border-style: none none inset inset;
                border-radius: 10px;
                padding-top: 1.25rem;
                
            }

            
        }
        
    }

    @media (min-width: 768px) { 
        .aa{

        .row {
            
            
        }}
     }
    
`;


export default HeroSection;