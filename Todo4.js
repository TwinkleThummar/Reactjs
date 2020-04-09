import React from 'react'
export default props => (
    <div className="list">
    <div style={{
        textDecoration: props.todo.complete ? "line-through" : ""
    }}
        onClick={props.toggleComplete}>
        {props.todo.text}
    </div>
    <input type="submit" onClick={props.onDelete} value="X" style={{background:"transparent",border:"none",cursor:"pointer",float:"right"}}/>
    </div>

) 