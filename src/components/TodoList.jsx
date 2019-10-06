import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <div id="todo-list">
        {this.props.todos.map(item => <Todo key={item.id} todo={item} />)}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
