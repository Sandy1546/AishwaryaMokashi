import styled from "styled-components";
import Exp from "./Exp";

const Experience = (props) => {

    const data = props.experienceData;
    return (

        <Wrapper id="experience">
            <div className="container-fluid container-md text-center" >
                <h2>Experience</h2>
    
                    {
                        data.map((curElem, index) => {
                            
                            return <div key={index} className="row aa  mx-auto">
                            <Exp {...curElem} />
                            </div>
                        })
                    }

            </div> 
        </Wrapper>
    );   
}


const Wrapper = styled.section`

    margin-top: 80px;
    padding-top: 80px;
    color: var(--l4);
    

    h2 {
        font-size: 50px;
        margin-bottom: 60px;
    }

    .aa {
        width: 80%;
    }

    .qq {
        border-style: outset outset outset outset;
        border-color: var(--l3);
        background-color: var(--d3);
        color: black;
        
    }


    h1 {
        font-size: 1.875rem;
        padding-bottom: 2.5rem;
    }

    .comp-Name {
        padding: 0.625rem;
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        height: 100%;

        p {
            font-size: 0.8rem;
            font-weight: bold;
            text-align: right;
            color: var(--l2);
        }

        h6 {
            text-align: right;
            font-weight: bold;
            color: var(--highlight);
        }
    }

    .details {
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        color: var(--l2);

        h6 {
            font-weight: bold;
            color: var(--l4);
        }

        
    }
    
`;


export default Experience;