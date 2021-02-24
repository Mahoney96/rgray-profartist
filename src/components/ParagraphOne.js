import React from 'react';


class SecondPageCompParOne extends React.Component{
    constructor(){
        super()
        this.state = 
            [
                "Hello from the 1st string",
                "Hello from the 2nd string"
            ];
            // [
            //     {newPerson:"Hello from an object inside the array,"}
            //     {newPersonB:"Hello from an object inside the array,"}
            //     {newPersonB:"Hello from an object inside the array,"}
            // ]
          
        };


        render(){
        return(
            <div>
            
            <SecondPageCompParOne/>

            </div>
            )
        }
    }
    console.log(SecondPageCompParOne)

export {SecondPageCompParOne};


// EXAMPLE OF A CLASS COMPONENT BELOW //
class ParagraphOneB extends React.Component
{
    render(){
        return <h2>Start of ParagraphThree ContainerB..</h2>
    }
}

 export {ParagraphOneB};

// var foo = function bar(){
//     var foo = "baz";

//     function baz(foo){ 
//     foo; // function... 
//     }
//     baz();
// };

// foo();
// bar(); // This will throw an error. //