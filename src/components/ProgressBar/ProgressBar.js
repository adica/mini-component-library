/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
    "--padding": 4 + "px",
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Wrapper
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      value={value}
      aria-valuemin="0"
      min="0"
      aria-valuemax="100"
      max="100"
  />
};

const Wrapper = styled.progress`
  width: 100%;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  
  &::-webkit-progress-bar {
    border-radius: var(--borderRadius);
    background-color: inherit;
    padding: var(--padding);
    overflow: hidden;
  }
  
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    border-top-right-radius: ${p => p.value === 100 && 'var(--borderRadius)'};
    border-bottom-right-radius: ${p => p.value === 100 && 'var(--borderRadius)'};
  }
  `;

export default ProgressBar;
