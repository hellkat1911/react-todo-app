import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from './Todo';

const StyledList = styled.div`
  @media (max-width: 805px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export default class TodoList extends Component {
  render() {
    return (
      <StyledList id="todo-list">
        {this.props.todos.map(item => <Todo key={item.id} todo={item} handleStatus={this.props.handleStatus} />)}
      </StyledList>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleStatus: PropTypes.func.isRequired
};
