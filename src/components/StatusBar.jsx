import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockIcon from '@material-ui/icons/Block';
import CachedIcon from '@material-ui/icons/Cached';
import DoneIcon from '@material-ui/icons/Done';

import statuses from '../data/statuses';

const Flex = styled.div`
  align-items: center;
  display: flex;
  font-size: 2.8rem;

  & span {
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: {
        [statuses.incomplete]: <BlockIcon htmlColor="rgba(184, 51, 255, 1)" fontSize="inherit" />,
        [statuses.inProgress]: <CachedIcon htmlColor="rgba(184, 51, 255, 1)" fontSize="inherit" />,
        [statuses.done]: <DoneIcon htmlColor="rgba(184, 51, 255, 1)" fontSize="inherit" />
      }
    };
  }

  render() {
    return (
      <Flex>
        <span><strong>{this.props.status}</strong></span>
        {this.state.status[this.props.status]}
      </Flex>
    );
  }
}

StatusBar.propTypes = {
  status: PropTypes.string
};
