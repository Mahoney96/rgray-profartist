import axios from "axios";
import React from "react";


//  EXAMLE OF A FUNCTIONAL COMPONENT BELOW //
function ParagraphThree()
{
    return <h1>Start of ParagraphThree ContainerA.</h1>
}
export {ParagraphThree};


// EXAMPLE OF A CLASS COMPONENT BELOW //
class ParagraphThreeB extends React.Component
{
    render(){
        return <h2>Start of ParagraphThree ContainerB..</h2>
    }
}

export {ParagraphThreeB};



 // TWO EXAMPLES OF HOC (HIGHER-ORDER-COMPOMENTS BELOW):
 const hoc = (ParagraphThreeC) => {
     return (
         <div> 
             <ParagraphThreeC/>
             {PaymentResponse.children.toUpperCase()}
         </div>
     )
 }

const hoctwo = (ParagraphThreeD) => {
    return (
        <div>
        <ParagraphThreeD {...props}/>
            {props.children.toUpperCase()}
        <ParagraphThreeD/>
        </div>
    )
}

export {ParagraphThreeB};

export {ParagraphThreeC};





// DUMB COMPONENT EXAMPLE BELOW //
export default ParagraphThreeGee => () => (
    <h1> And Another Paragraph Here As a dumb Component. </h1>
);


// component without using class or function but rather a default component //


// Presenatational Components //

const ParagraphThreeList = props =>
(<ul>
    {props.list.map(user =>
        (<li>{items}</li>   ))
    }
</ul>)

export {ParagraphThreeList}


// CONTAINER COMPONENTS - Are CLASS COMPONENTS W/:
                                            // • (1)CONSTRUCTOR ELEMENTS(including within them) //
                                            // • (2)INCLUDES 'this.state' //
                                            // • (3)INCLUDES ' ComponentDidMount' // - Think Mounting the compnonents onto the DOM VIEW of the UI for the user. //
                                            // • (4)INCLUDES A RENDER AT END OF FUNCTION //

class ParagraphThreeContainer extends React.Component{
    constructor()
    {
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get('/ParagraphThreeList').then(
            items=>this.setState({ list: items})
        )
    }
render() {
    return(<div>
        <p>
            Beginning of the conatiner for parargraph ParagraphThreeContainer.
            </p>    
    </div>
    )
    }
}


 
class SecondPageComp extends React.Component{
    constructor(){
        super()
        this.state = {
            itemsTwo: [
                "Hello from the 1st string",
                "Hello from the 2nd string",
                1,2,3,4,5,6,
                {name:"Hello from an object inside the array,"},
                {name:"Hello from an object inside the array,"},
                {name:"Hello from an object inside the array,"}
            ],
        }
        console.log(itemsTwo)
    }

}

export {SecondPageComp};


