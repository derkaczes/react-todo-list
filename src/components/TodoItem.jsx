import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#3CFF77',
            padding: '10px',
            borderBotton: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.propsTypes = {
    todos: PropTypes.object.isRequired
}

export default TodoItem;