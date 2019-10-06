import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import todos from '../data/todos';

const Main = styled.main`
  background: rgba(51, 224, 255, 0.3);
  border: 2px solid rgba(51, 122, 255, 1);
  margin: 40px;
  min-height: calc(100vh - 80px);
  padding: 25px;

  @media (max-width: 805px) {
    margin: 20px;
    min-height: calc(100vh - 40px);
  }
`;

const Flex = styled.div`
  display: flex;

  @media (max-width: 805px) {
    flex-direction: column;
  }
`;

const Flexed = styled.section`
  flex: 1;

  @media (max-width: 805px) {
    margin-bottom: 15px;
  }
`;

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo(event, value) {
    event.preventDefault();
    this.setState((state, props) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          text: value,
          status: 'Incomplete'
        }
      ]
    }));
  }

  render() {
    return (
      <Main id="app-container">
        <h2>To-Do List:</h2>
        <Flex>
          <Flexed>
            <TodoForm handleSubmit={this.addNewTodo} />
          </Flexed>
          <Flexed>
            <TodoList todos={this.state.todos} />
          </Flexed>
        </Flex>
      </Main>
    );
  }
}
