import React from 'react';

class Dashboard extends React.Component{
    constructor(){
        super();
    }
    render(){
    // javascript here //
            function baz(foo, bam) {
                foo = "bam";
                bam = "yay";
            }

            console.log(baz)


    const newArray = function newArray(){
        "Hello to the Landing Page"
    }
    console.log(newArray);
            
    return(

        <div className="conatiner-body-num-one">
            <p> Hello To the LandingPage. </p>
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