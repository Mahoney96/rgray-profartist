import React from 'react';


class SecondPageCompParOne extends React.Component{
    render(){
    return(
        <div>
        
        <SecondPageCompParOne/>

        </div>
        )
    }
};
 


// EXAMPLE OF A CLASS COMPONENT BELOW //
class ParagraphOneB extends React.Component
{
    render(){
        return <h2>Start of ParagraphThree ContainerB..</h2>
    }
};


export {ParagraphOneB, SecondPageCompParOne};

// var foo = function bar(){
//     var foo = "baz";

//     function baz(foo){ 
//     foo; // function... 
//     }
//     baz();
// };

// foo();
// bar(); // This will throw an error. //