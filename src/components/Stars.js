import './Stars.css'
import React,{ useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Stars = () => {
    const[starColor1,setStarColor1]= useState(false);
    const[starColor2,setStarColor2]= useState(false);
    const[starColor3,setStarColor3]= useState(false);
    const[starColor4,setStarColor4]= useState(false);
    const[starColor5,setStarColor5]= useState(false);
    
    const moveOn1=(e)=>{setStarColor1(!starColor1)};
    const moveOn2=(e)=>{setStarColor2(!starColor2)};
    const moveOn3=(e)=>{setStarColor3(!starColor3)};
    const moveOn4=(e)=>{setStarColor4(!starColor4)};
    const moveOn5=(e)=>{setStarColor5(!starColor5)};

    const hoverOn={
        color:'yellow'
    }
    const hoverOff={
        color:'gray'
    }

    return (
        <div className='container'>
            <div className='stars'>
                <FaStar style={starColor1 ? hoverOn:hoverOff } onMouseEnter={moveOn1}/>
                <FaStar style={starColor2 ? hoverOn:hoverOff } onMouseEnter={moveOn2}/>
                <FaStar style={starColor3 ? hoverOn:hoverOff } onMouseEnter={moveOn3}/>
                <FaStar style={starColor4 ? hoverOn:hoverOff } onMouseEnter={moveOn4}/>
                <FaStar style={starColor5 ? hoverOn:hoverOff } onMouseEnter={moveOn5}/>
            </div>
            <div className='rate-result'>
                <p>Your rating is : </p>
                <p>Thanks for your participation!</p>
            </div>
        </div>
    )
}

export default Stars
