// import React, { Component } from "react";
// import "./App.css";

// class LandingPage extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             filterString: "",
//             clayTypes: ["earthware clays", "stoneware clays", "ball clays", "fire clays", "porcelain clays"]
//         };
//     }


//     handleChange(filter) {
//         this.setState({ filterString: filter });
//     }

//     render() {
//         let clayTypesToDisplay = this.setState.clayTypes
//         .filter((element, index) => {
//             return element.includes(this.state.filterString);
//         })
//         .map((element, index) => {
//             return <h2 key={index}>{element}</h2>
//         });


//         return (
//             <div className="LandingPage">
//                 <input onChange={e => this.handleChange(e.target.value)} type="text" />
//                 {clayTypesToDisplay}
//                 <div>
//                     <TopHeader/>
//                     <Login/>
//                 </div>
//             </div>
//         );
//     }

// }

// export default {LandingPage};