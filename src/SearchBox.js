import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
	return(
      <div className='pa2'>
     <input 
     className='pa3 b2 b--green bg-light-blue'
type='Search' 
 placeholder='search robot'
onChange={searchChange}
/>
</div>
		);
}
export default SearchBox;