import React from 'react';
import './Algorithm.css';


function Algorithm(props) {
  return (
    <>
     <h2 className="algorithm-header">{props.description.name}</h2>  
     <p className="algorithm-description">{props.description.summary}</p>
     <p className="algorithm-description">{props.description.input}</p>
     <p className="algorithm-description">{props.description.output}</p>
     <p className="algorithm-description">{props.description.explanation}</p>
    </>
  );
}

export default Algorithm;
