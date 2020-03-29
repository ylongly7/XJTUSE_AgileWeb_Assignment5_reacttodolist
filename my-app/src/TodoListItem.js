import React from 'react';
 
export class TodoListItem extends React.Component{
 state={st:"未完成",ct:"content"}
 hdclick=()=>{
	 this.setState({st:"已完成"})
 }
  render(){
	  return (
	<div>
     <input value={this.props.content }></input>&nbsp;&nbsp;
		
		{this.state.st}
	 &nbsp;&nbsp;
	 <button onClick={this.hdclick}>标记</button>
	 <hr></hr>
	 
	</div>
  );
 
  }
}

export default TodoListItem;
