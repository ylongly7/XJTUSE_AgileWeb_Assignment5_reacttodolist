import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListItem from './TodoListItem';

 

export class App extends React.Component{
		
	hdclick=()=>{
	 this.state.listArr.push({'content':'备忘录内容'+(this.state.listArr.length+1)})
	 this.setState({listArr:this.state.listArr})
	  
	}		
	
 state={itemcount:0,listArr:[ ]}
  render(){	 
        
	  
	  return (
	<div className="App">
      <header className="">
        
        <h1>
          Simple TodoList&nbsp;&nbsp;<button onClick={this.hdclick}>添加</button>
        </h1>
		
		{
                    this.state.listArr.map((item,index)=>{
                        return(
                             <TodoListItem content={item.content}/>
                        )
                    })
                }
         
      </header>
    </div>
  );
 
  }
}

export default App;
