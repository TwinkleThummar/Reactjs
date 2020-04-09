import React, { Component } from 'react';
import Todoform from './Todoform'
import Todo4 from './Todo4';
export default class Todo2 extends Component {
    alldata
    state = {
        todos: [],
        todoToShow: "all"
    }
    componentDidMount(){
        this.alldata=JSON.parse(localStorage.getItem("item")) 
        console.log(this.alldata);
        
        if (localStorage.getItem("item")) {
            this.setState({ todos:this.alldata.todos
               
              });
        }
    }
    componentWillUpdate(props,state){
    localStorage.setItem("item",JSON.stringify( state))
    }
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }
    updateToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }
    handledeleteTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    removeallTodo = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render() {
        let todos = [];
        if (this.state.todoToShow === "all") {
            todos = this.state.todos
        }
        else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        }
        else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return (
            <div className="list">
                <Todoform onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <Todo4  key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete={() => this.handledeleteTodo(todo.id)}
                        todo={todo} />
                ))}
                <div>
                    todos left:{this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                    <button onClick={() => this.updateToShow("all")}>All</button>
                    <button onClick={() => this.updateToShow("active")}>Active</button>
                    <button onClick={() => this.updateToShow("complete")}>Complete</button>
                     {/* {this.state.todos(todo => todo.complete).length ? ( */}
                        <button onClick={this.removeallTodo}>
                            Clear completed
                    </button>
                {/* ):null} */}
           
                </div>
                </div>
        )
    }
}
