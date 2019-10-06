import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusBar from './StatusBar';

const StyledDiv = styled.div`
  background: #fff;
  border: 2px solid #000;
  cursor: pointer;
  margin-bottom: 10px;
  max-width: 100%;
  padding: 10px;
  user-select: none;
  width: 325px;
`;

export default class Todo extends Component {
  render() {
    return (
      // Event handlers that accept a param should be returned from an
      // anonymous fn or they will run on every re-render
      <StyledDiv onClick={() => this.props.handleStatus(this.props.todo.id)}>
        <p>{this.props.todo.text}</p>
        <hr style={{ color: '#ccc' }} />
        <StatusBar status={this.props.todo.status} />
      </StyledDiv>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleStatus: PropTypes.func.isRequired
};
