import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  @media (max-width: 805px) {
    margin-bottom: 20px;
    max-width: 100%;
    text-align: center;
  }
`;

const TodoInput = styled.input`
  border: 2px solid #d2d2d2;
  display: block;
  font-size: 1.8rem;
  margin-bottom: 10px;
  max-width: calc(100% - 20px);
  padding: 2px;
  width: 350px;

  @media (max-width: 805px) {
    max-width: unset;
    width: 100%;
  }
`;

const SubmitBtn = styled.input`
  background: rgba(184, 51, 255, 1);
  border: 2px solid #000;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 5px 15px;
`;

// Create a blank reference to a DOM element
const ref = createRef();

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleNewTodo = this.handleNewTodo.bind(this);
  }

  // Lifecycle : fires after component initial mount
  componentDidMount() {
    // `ref.current` points to the referenced DOM element
    ref.current.focus();
  }

  handleNewTodo(event) {
    this.props.handleSubmit(event, ref.current.value);
    ref.current.value = '';
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleNewTodo}>
        {/* Reference created via component `ref` attribute */}
        <TodoInput ref={ref} />
        <SubmitBtn type="submit" value="Add +" />
      </StyledForm>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
