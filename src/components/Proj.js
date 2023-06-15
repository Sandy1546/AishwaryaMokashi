

const Proj = (curElem) => {
    const { projName, projDes, projImage} = curElem;
    //  console.log(curElem);
    return (
        <div className="card ">
            <img className="img-fluid" src={projImage} alt={projName} />
            <div className="card-body">
                <h5>{projName}</h5>
                <div className="card-text text-left">
                    <ul>
                        {projDes.map((curElem, index) => {
                            return <li key={index}>{curElem}</li>
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Proj;