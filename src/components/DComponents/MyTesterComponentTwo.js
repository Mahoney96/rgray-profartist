import React from "react";

function MyTestComponentTwo(){
    return(
        <div style={{
            width: '90%',
            maxWidth: '40 rem',
            margin: '2rem auto',
            border: '1px solid #ccc',
            padding: '1rem'
        }}
        >
        <MyTestComponentTwo />
        </div>
    );
}

export default MyTestComponentTwo();


// Note: IS THERE A DIFFERENCE BETWEEN - exportingReact components AS:

                // - As ' export default ~ MyTesterComponent() ', OR 
                // - Does the () not serve a purpose when exporting default/functional/Class Components. ??? //

                