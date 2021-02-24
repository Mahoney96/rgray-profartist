import React from 'react';

class Dashboard extends React.Component{
    render(){
    // javascript here //
            function baz(foo, bam) {
                foo = "bam";
                bam = "yay";
            }

            console.log(baz)

    const newDashObj = function newDashObj(){
        "Hello to the Landing Page"
    }
    console.log(newDashObj);
            
    return(

        <div className="conatiner-body-num-one">
            <p> Hello To the LandingPage. </p>
            <Dashboard/>
            <a>
                <p>
                 Let's See, Let's See.  
                </p>
            </a>
        </div>
    );
  }
};

export default Dashboard;