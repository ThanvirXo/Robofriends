import React from "react";


const SearchBox = ({searchfield,searchChange})=>{
    return(
        <div className="tc">
        <input className='pa2 ma2' type='search' placeholder='search robots' onChange={searchChange}/>

        </div>
    );
}

export default SearchBox;