import './Stars.css'
import React,{ useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Stars = () => {
const[rating,setRating]=useState(0);

return(

    <div className="stars">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        <div 
          key={index}
          className={index <= rating ? "on" : "off"}
          onClick={() => setRating(index)}
        >
          <FaStar className="star"/>
        </div>
      );
    })}
  </div>
)

 
}
    
    

 

   

    
   
           


export default Stars
