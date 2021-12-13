import './Stars.css'
import React,{ useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Stars = () => {
const[rating,setRating]=useState('');
const[hover,setHover]=useState(0);


return(
<>
    <div className="stars">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
      <div>
        <div 
          key={index}
          className={index <= (hover || rating) ? "on" : "off"}
          onClick={()=>setRating(index)}
          onMouseEnter={()=> setHover(index)}
          onMouseLeave={()=>setHover(rating)}
        >
          <FaStar className="star"/>
          
        </div>
      </div>   
      );
    })}
     
  </div>
  <p className='rating-result' >Your rating is: { rating } </p>
     <p className='thanks' >Thanks for your participation!</p>
  </>
)

 
}
export default Stars
