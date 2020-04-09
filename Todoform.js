import React, { Component } from 'react'
import shortid from 'shortid'
export default class Todoform extends Component {

    state = {
        text: ""
    }

    handlechange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlesubmit = e => {
        e.preventDefault()
        this.props.onSubmit(
            {
                id: shortid.generate(),
                text: this.state.text,
                complete: false
            }
        )
        this.setState({
            text: ""
        })

    }
    render() {
        return (
            <div>
                <h1 className="title">Todos</h1>
                <header>
                    <form id="to-do-forms" onSubmit={this.handlesubmit}>
                        <input
                            name="text"
                            value={this.state.text}
                            onChange={this.handlechange}
                            placeholder="Enter text"
                        />
                        <button onClick={this.handlesubmit}>Add Todo</button>
                    </form>
                </header>
            </div>
        )
    }
}