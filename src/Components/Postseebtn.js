import React from 'react';
import { useState } from 'react';
import Newpost from './Newpost';
import Published from  './Published';

const Postseebtn = (prop) => {
	const [view, setview] = useState(<Newpost/>)
	const setnewblog = (e) =>{
		// e.preventDefault();
		setview(<Newpost/>)
	}
	const pubblog = (e) =>{
		e.preventDefault();
		setview(<Published title={prop.title}/>)
	}
	return (<div>
				<div class="ui center aligned grid">
					<div class="three column row">
						<button onClick={setnewblog} className="ui left floated secondary basic button">New post</button>
						<button onClick={pubblog} className="ui right floated secondary basic button">Published</button>
					</div>
				</div><br/>
				<div>{view}</div>
			</div>);
};

export default Postseebtn;