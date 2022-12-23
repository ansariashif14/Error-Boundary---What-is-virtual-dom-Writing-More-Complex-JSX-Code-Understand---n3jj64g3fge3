import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);
    props.change(setError);
    
    if(error)
    {
      throw new error("Error")
    }
  return ( <>
    {    
        error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
