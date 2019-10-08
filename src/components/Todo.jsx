import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusBar from './StatusBar';
import DeleteIcon from '@material-ui/icons/HighlightOff';

const StyledDiv = styled.div`
  background: #fff;
  border: 2px solid #000;
  cursor: pointer;
  font-size: 2.2rem;
  margin-bottom: 10px;
  max-width: 100%;
  padding: 10px;
  position: relative;
  user-select: none;
  width: 325px;

  & .delete-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    &:hover {
      transform: scale(1.15);
    }
  }

  & p {
    font-size: 1.5rem;
  }

  & hr {
    color: #ccc;
  }
`;

export default class Todo extends Component {
  render() {
    return (
      // Handlers that take a param returned from an anonymous fn
      <StyledDiv onClick={() => this.props.handleStatus(this.props.todo.id)}>
        <DeleteIcon
          classes={{ root: 'delete-icon' }}
          htmlColor="rgba(184, 51, 255, 1)"
          fontSize="inherit"
          // Pass `event` object to click handler fn
          onClick={event => this.props.handleDelete(event, this.props.todo.id)}
        />
        <p>{this.props.todo.text}</p>
        <hr />
        <StatusBar status={this.props.todo.status} />
      </StyledDiv>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleStatus: PropTypes.func.isRequired
};
