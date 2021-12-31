import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: '12px',
  large: '18px',
};

const padding = {
  small: '20px',
  large: '25px',
};

const heights = {
  small: '24px',
  large: '32px',
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper style={{ width }} height={heights[size]}>
      <IconWrapper>
        <Icon id={icon} size={sizes[size]} strokeWidth={1} />
      </IconWrapper>
      <Input placeholder={placeholder} value={label} padding={padding[size]} />
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${COLORS.black};
  height: ${p => p.height};

  &:hover {
    cursor: pointer;
    
    svg {
      stroke: ${COLORS.black};
      stroke-width: 2px;
    }
    
    input {
      color: ${COLORS.black};  
    }
  }
`;

const Input = styled.input`
  padding-left: ${p => p.padding};
  border: 0;
  height: 100%;
  width: 100%;
  color: ${COLORS.gray700};
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5px;
  top: 0;
  height: 100%;
  `

export default IconInput;
