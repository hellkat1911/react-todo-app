import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// Initial data -- sourced from .js files, but
// could be database, API, etc.
import todos from '../data/todos';
import statuses from '../data/statuses';

const Main = styled.main`
  background: rgba(51, 224, 255, 0.2);
  border: 2px solid rgba(51, 122, 255, 1);
  margin: 40px auto;
  max-width: calc(100% - 80px);
  min-height: calc(100vh - 80px);
  padding: 25px;
  width: 1200px;

  @media (max-width: 805px) {
    margin: 20px;
    max-width: calc(100% - 40px);
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
  // ES6 includes constructor by default, not necessary
  // to override just for `super(props)`
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    // Call `.bind(this)` on event handlers to preserve `this` reference
    this.addNewTodo = this.addNewTodo.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  generateId() {
    // Use Unix timestamps for unique IDs
    return Math.floor(Date.now() / 1000);
  }

  addNewTodo(event, value) {
    event.preventDefault();
    // Calling `setState` with a fn allows access to
    // current state and props
    this.setState((state, props) => ({
      todos: [
        ...state.todos,
        {
          id: this.generateId(),
          text: value,
          status: statuses.incomplete
        }
      ]
    }));
  }

  // Class methods don't use the `function` keyword
  updateStatus(id) {
    this.setState(state => {
      const todo = state.todos.find(item => item.id === id);
      todo.status = this.cycleStatus(todo.status);
      return state.todos;
    });
  }

  cycleStatus(current) {
    // Statuses imported from external source
    if (current === statuses.incomplete) {
      return statuses.inProgress;
    } else if (current === statuses.inProgress) {
      return statuses.done;
    } else {
      return statuses.incomplete;
    }
  }

  deleteTodo(event, id) {
    // Prevent event bubbling to parent click handler
    event.stopPropagation();
    this.setState((state) => ({
      // `.filter()` returns new array without selected
      todos: state.todos.filter(item => item.id !== id)
    }));
  }

  // A `render()` fn is mandatory for a class component
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
            {/* Members/state/props must be accessed on `this` */}
            <TodoList
              todos={this.state.todos}
              handleStatus={this.updateStatus}
              handleDelete={this.deleteTodo}
            />
          </Flexed>
        </Flex>
      </Main>
    );
  }
}
