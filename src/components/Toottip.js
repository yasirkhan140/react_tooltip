
import React,{useState} from 'react'


const Tooltip = ({text,children})=>{
    const [isVisible,setIsVisible]= useState(false);
    return(
        <div className='toottip-container'onMouseEnter={()=>setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)}>
            {children}
            {isVisible && (<div className='toottip'>{text}</div>)} 
        </div>
    )
}
export default Tooltip; 