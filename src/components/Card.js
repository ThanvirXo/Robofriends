import React from 'react';

const Card=({name,id,username,email})=>{
    return (
      <div className='bg-yellow dib br3 pa2 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            
        </div>
      </div>  
    );

    
}
export default Card;