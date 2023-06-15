
import styled from "styled-components";
import Edu from "./Edu";

const Education = (props) => {

    // console.log(props);
    const data = props.educationData;

    return (
        <Wrapper id="education">
            <div className="container-fluid container-md text-center" >
                <h2>Education</h2>

                <div></div>
    
                    {
                        data.map((curElem, index) => {
                            
                            return <div key={index} className="row aa  mx-auto">
                            <Edu {...curElem} />
                            </div>
                        })
                    }

            </div> 
        </Wrapper>
    );
};


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

    .eduu {
        background-color: var(--d3);
        border-style: outset outset outset outset;
        border-color: var(--l3);
    }

    h1 {
        font-size: 1.875rem;
        padding-bottom: 2.5rem;
    }

    .degree {
        padding: 0.625rem;
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        height: 100%;

        p {
            font-size: 0.8rem;
            font-weight: bold;
            text-align: right;
            color: var(--l1);
        }

        h6 {
            text-align: right;
            font-weight: bold;
            font-size: 1.125rem;
            color: var(--highlight);
        }
    }

    .Institute {
        padding-left: 1.875rem;
        padding-right: 1.25rem;
        border-radius: 1.25rem;
        
        

        .ques {
            font-weight: 400;
            font-size: 1.063rem;
            color: var(--l1);
        }

        h6 {
            font-weight: bold;
            color: var(--l1);
            
            
        }

        .institute-Name {
            color: var(--l4);
        }

        p {
            margin-top: 1.25rem;
            text-align: right;
            font-weight: bold;
            font-style: italic;
            color: var(--l1);
        }
    }


    

    
`;


export default Education;