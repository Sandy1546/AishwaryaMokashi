
import Proj from "./Proj";
import styled from "styled-components";

const Projects = (props) => {

    // console.log(props.projectsData);
    const data = props.projectsData;
    // console.log(data[0].id);

    return (
        <Wrapper id="projects">
            <div className="container-fluid container-md text-center" >
                <h2>Projects</h2>
                <div className="row gy-5 gx-1 mx-auto">
                
                    {
                        data.map((curElem, index) => {
                            
                            return <div key={index} className="col-xs-8 col-sm-8 col-md-8 col-lg-5 mx-auto ">
                            <Proj {...curElem} />
                            </div>
                        })
                    }

                </div>
            </div> 
        </Wrapper>
    );
};


const Wrapper = styled.section`
    margin-top: 80px;
    padding-top: 80px;


    .row {
        width: 80%;
    }

    h2 {
        font-size: 50px;
        margin-bottom: 60px;
    }

    p {
        margin-bottom: 60px;
    }
     
    .card {
        border-radius: 10px;
        background-color: var(--d2);
        height: 100%;
        color: var(--l2);
        max-width: 350px;

        h5 {
            color: var(--l4);
        }

        :hover {
            
            
            transform: scale(1.05);
            transition: all 0.3s linear;

            h5 {
                color: var(--highlight);
            }
        }

        img {
            padding: 0.625rem;
            max-height: 12.5rem;
            border-radius: 0.625rem;
        }

        li {
            text-align: start;
        }

        a {
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;
            color: black;

            :hover {
                color: white;
            }
        }
  
    }
`;

export default Projects;