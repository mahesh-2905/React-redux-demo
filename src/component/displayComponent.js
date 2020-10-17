import React from 'react';


const Display = (props)=>{

    const renderData = ({data})=>{
         if(data){
            return data.map((data)=>{
                 return(
                    <p>{data.name}</p>
                 ) ; 
             })
         }
    }
    return(
        <React.Fragment>
            <h1>Movies List</h1>
            {renderData(props)}
        </React.Fragment>
        
    )
}

export default Display;