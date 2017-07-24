import React, { Component } from 'react';

class TodoComponent extends Component {
    render () {
        return (
            <div className="todo-container">
                <div className="w3-panel w3-card-4 row">
                  <p className="col-md-3">
                    <input type="checkbox"/></p>
                  <p className="col-md-7">Complete this example app</p>
                </div>
            </div>
        )
    }
}

export default TodoComponent