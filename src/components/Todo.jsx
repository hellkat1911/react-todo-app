import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #fff;
  border: 2px solid #000;
  margin-bottom: 10px;
  max-width: 100%;
  padding: 10px;
  width: 325px;
`;

export default class Todo extends Component {
  render() {
    return (
      <StyledDiv>
        <p>{this.props.todo.text}</p>
        <p><strong>Status:</strong> {this.props.todo.status}</p>
      </StyledDiv>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};
