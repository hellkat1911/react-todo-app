import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import todos from '../data/todos';
import statuses from '../data/statuses';

const Main = styled.main`
  background: rgba(51, 224, 255, 0.2);
  border: 2px solid rgba(51, 122, 255, 1);
  margin: 40px;
  min-height: calc(100vh - 80px);
  padding: 25px;

  @media (max-width: 805px) {
    margin: 20px;
    min-height: calc(100vh - 40px);
  }
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Instructions = styled.p`
  margin: 0 0 30px;

  & strong {
    color: rgba(82, 51, 255, 1);
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
      todos,
      statuses
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  addNewTodo(event, value) {
    event.preventDefault();
    this.setState(state => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          text: value,
          status: this.state.statuses.incomplete
        }
      ]
    }));
  }

  updateStatus(id) {
    this.setState(state => {
      const todo = state.todos[id - 1];
      todo.status = this.cycleStatus(todo.status);
      return state.todos;
    });
  }

  cycleStatus(current) {
    const statuses = this.state.statuses;
    if (current === statuses.incomplete) {
      return statuses.inProgress;
    } else if (current === statuses.inProgress) {
      return statuses.done;
    } else {
      return statuses.incomplete;
    }
  }

  render() {
    return (
      <Main id="app-container">
        <Title><span role="img" aria-label="Atom emoji">⚛️</span>&nbsp;&nbsp;To-Do List</Title>
        <Instructions>Add <strong>new</strong> items to the list with the button below. Click <strong>existing</strong> items to update their status.</Instructions>
        <Flex>
          <Flexed>
            <TodoForm handleSubmit={this.addNewTodo} />
          </Flexed>
          <Flexed>
            <TodoList todos={this.state.todos} handleStatus={this.updateStatus} />
          </Flexed>
        </Flex>
      </Main>
    );
  }
}
