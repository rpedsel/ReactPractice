import React from 'react';

const userinput = (props) => {
    
    const style = {
        backgroundColor: 'lightgreen',
        fontSize: '25px',
        font: 'Arial',
        width: '30%',
        margin: '14px auto',
        padding: '12px',
        textAlign: 'center',
        border: '2px dashed darkgreen'
      }; 

    return (
        <div className="UserInput">
            <input style={style} type="text" onChange={props.changed} value={props.skill}/>
        </div>
    )
};

export default userinput;