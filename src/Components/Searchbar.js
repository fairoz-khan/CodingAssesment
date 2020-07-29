import React, {useState, useEffect} from 'react';
import {State} from './Newpost';


const Searchbar = (prop) =>{
	return (<div>
				<form className="container ui form center aligned">
					<div class="ui right labeled input">
						<div class="ui basic label"><i aria-hidden="true" class="search icon"></i></div>
							<input 
									type="text" 
									placeholder="Search term"
									onChange={(e)=>{prop.text(e.target.value)}}/>
						<div class="ui label"><i aria-hidden="true" class="cancel icon"></i></div>
					</div>
				</form>
			</div>);
};

export default Searchbar;