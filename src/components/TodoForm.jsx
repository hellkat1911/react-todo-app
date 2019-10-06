import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  @media (max-width: 805px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const TodoInput = styled.input`
  border: 2px solid #d2d2d2;
  display: block;
  font-size: 1.8rem;
  margin-bottom: 10px;
  max-width: 100%;
  padding: 2px;
  width: 325px;
`;

const SubmitBtn = styled.input`
  background: rgba(184, 51, 255, 1);
  border: 2px solid #000;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 5px;
`;

const ref = createRef();

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleTodo = this.handleTodo.bind(this);
  }

  componentDidMount() {
    ref.current.focus();
  }

  handleTodo(event) {
    this.props.handleSubmit(event, ref.current.value);
    ref.current.value = '';
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleTodo}>
        <TodoInput ref={ref} />
        <SubmitBtn type="submit" value="Add" />
      </StyledForm>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
