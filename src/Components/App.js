import React, {useState} from 'react';
import Searchbar from './Searchbar';
import Postseebtn from './Postseebtn';

const App = () =>{
	const [text , setText] = useState('')
	const getSearchval = (val) =>{
		setText(val)
	}
	return (<div className='ui container segments'>
			<div className='ui segment'>
				<Searchbar text={getSearchval}/>
			</div>
			<div className='ui segment'>
				<Postseebtn title={text}/>
			</div>
		</div>);
};

export default App;