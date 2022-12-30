import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, revomeTourFunction}) => {
  const [readMore, setReadMore] = useState(false);


  return <atricle className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{ readMore ? info : `${info.substring(0, 200)}...`}
      <button onClick={()=>setReadMore(!readMore)}>{readMore ? "Show less" : "Show more"}</button></p>
      <button className='delete-btn' onClick={()=>{revomeTourFunction(id)}}>Not interested 🙅‍♀️</button>
    </footer>
  </atricle>;
};

export default Tour;
