

const Exp = (curElem) => {
    const { duration, companyName, role, task } = curElem;
    // console.log(curElem);
    return (
        <div className="row qq gy-3 rounded mx-auto">
            <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="comp-Name">
                                <h6 className="comp">{companyName}</h6>
                                <p className="work-date">{duration}</p>
                                
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="details text-start">
                                <h6 className="role"> {role}</h6>
                                <div className="work text-left">
                                    <ul>
                                        {task.map((curElem, index) => {
                                            return <li key={index}>{curElem}</li>
                                        })}
                                    </ul>

                                </div>
                        </div>
                    </div>
        </div>
    );
};

export default Exp;