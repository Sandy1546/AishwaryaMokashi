import styled from "styled-components";

const Cert = (curElem) => {

    // const [show, setShow] = useState(false);

    // const ShowCert = (src) => {
    //     console.log(show);
    //     console.log(src.certificateImgSrc);

    //     if(show === true) {
            
    //         document.querySelector('.popup-Img').style.visibility = 'hidden';
    //         setShow(false);
    //     }
    //     else{
            
    //         document.querySelector('.popup-Img').style.visibility = 'visible';
    //         document.querySelector('.popup-Img img').src = src.certificateImgSrc;
    //         document.querySelector('.popup-Img img').alt = src.certificateImgSrc;
            
    //         setShow(true);
    //     }
    // }



    const {  certificateName } = curElem;
    
    return (
        <Wrapper >
            <div 
            //  onClick={()=>{ShowCert({certificateImgSrc})}} 
            // onClick={() => wweerr(certificateImgSrc)}
                className="card rounded">
                
                <div className="card-body">
                    <h5>{certificateName}</h5>
                    
                </div>
                
            </div>

             {/* <div className="popup-Img" id="popup">
                    <span onClick={ShowCert}>&times;</span>
                    <img className="Img1" src="Images/Certifications/CapstoneRetrievingProcessingAndVisualizing.jpg" alt="Certificate"/>
                    
            </div>  */}
        </Wrapper>
    );
};

const Wrapper = styled.div`



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
    z-index: 1;
    
    visibility: hidden;

    .Img1 {
        display: block;
        margin: auto;
        width: 50%;
        align-items: center;
    }

    span {
        position: absolute;
        top: 90px;
        right: 60px;
        font-size: 2.5rem;
        font-weight: bolder;
        color: white;
        cursor: pointer;
        z-index: 5000;
    }
    
}
`;



export default Cert;