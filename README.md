# XJTUSE_AgileWeb_Assignment5_reacttodolist

![运行图](https://upload-images.jianshu.io/upload_images/4822696-2df99560075d0ba7.gif?imageMogr2/auto-orient/strip)


### 代码：
```
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
```
