import React from 'react';
 
export class TodoListItem extends React.Component{
 state={st:"未完成",ct:"content"}
 hdclick=()=>{
	 this.setState({st:"已完成"})
 }
  render(){
	  return (
	<div>
     <input value={this.props.content } id={"input"+this.props.idx}></input>&nbsp;&nbsp;
		
		<span id={"todostate"+this.props.idx}>{this.state.st}</span>
	 &nbsp;&nbsp;
	 <button onClick={this.hdclick} id={"btn_changests"+this.props.idx}>标记</button>
	 <hr></hr>
	 
	</div>
  );
 
  }
}

export default TodoListItem;
