import React from 'react';

const Support = ()=>{
    return(
        <div>
            <div className="container02">
                <div className="help">How can we help you?</div>
                <div className="boxem"><input type="text" placeholder="Happy To Help! Just type in."></input><i className="fi fi-rr-search"></i></div>
                <div className="helpagain">
                <div className="help1">
                    <p className="mainprob">LOGGING IN</p>
                    <p className="subprob">Can't remember login details</p>
                </div>
                <div className="help2">
                    <p className="mainprob">TROUBLESHOOTING</p>
                    <p className="subprob">My account doesn't look right</p>
                </div>
                <div className="help3">
                    <p className="mainprob">AVAILABE PLANS</p>
                    <p className="subprob">Start or join family plan</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Support;