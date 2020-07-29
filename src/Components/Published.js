import React from 'react';
import Reducer from './Reducer';
import {State} from './Newpost';
import { connect } from 'react-redux';
import {Createblog} from './Action';


const Published = (prop) =>{
	const data = State().getState().blog
	console.log(prop.title)
	const displaytosearch = () =>{
		return(
			data.map((d, index)=>{
				if(d.title===prop.title){
					return(<div className='ui segment' key={index}>
						<div>Title : {d.title}</div>
						<div>Text : {d.text}</div>
					</div>);
				}else{
					return;
				}	
			})
		);
	}
	const display = () =>{
		return(
			data.map((d, index)=>{
				return(<div className='ui segment' key={index}>
						<div>Title : {d.title}</div>
						<div>Text : {d.text}</div>
					</div>);
			})
			// console.log(prop)
		);
	}
	const show = () => {
		return prop.title == '' ? display() : displaytosearch()
	}
	return (
		<div style={{ height: '500px', overflowY: 'scroll' }}>
			 {show()}
		</div>
	);
};

// const mapStatetoProps = (state) =>{
// 	return {blog:state.selectedblog}
// }
export default Published;