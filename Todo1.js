import React, { Component } from 'react';
import Todo2 from './Todo2'
import './App.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
class Todo1 extends Component{
    state={
        count:0
    }
    increment=()=>
    {
        this.setState({
            count:this.state.count+1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render()
    {
        return(
            <div className="Todo1">
                <Todo2/>
            </div>
        )
    }
}
export default Todo1;