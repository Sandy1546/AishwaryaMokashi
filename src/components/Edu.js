

const Edu = (curElem) => {
    const { duration, degree, instituteName, instituteUniversity, location, gradeFormat, grade } = curElem;
    // console.log(curElem);
    return (
        <div className="row eduu gy-3 rounded mx-auto">
            <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="degree">
                                <h6 className="edu">{degree}</h6>
                                <p className="duration">{duration}</p>
                                
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="Institute text-start">
                                <h6 className="institute-Name"><span className="ques">Institute:</span> {instituteName}</h6><br/>
                                <h6 className="university-Name"><span className="ques">University:</span> {instituteUniversity}</h6>
                                <p className="location">{location}</p>
                                <p className="grade">{gradeFormat}: {grade}</p>
                        </div>
                    </div>
        </div>
    );
};

export default Edu;