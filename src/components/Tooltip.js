import React,{useState} from 'react';


const Tooltip = ({text,children}) =>{

   let[hover,setHover] = useState(false);
   
   function showText(){
     setHover(true);
   }

   function hideText(){
    setHover(false);
   }


    return (
       <div className='tooltip'
        onMouseOver={showText}
        onMouseLeave={hideText}
        >
        {children}

       {hover &&
        <span className='tooltiptext'>{text}</span>
       }

       </div>

    )
}

export default Tooltip;