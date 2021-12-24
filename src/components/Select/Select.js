import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <Presentation>
                {displayedValue}
                <IconWrapper style={{ '--icon-size': 24 + 'px' }}>
                    <Icon id="chevron-down" size={24} strokeWidth={1} />
                </IconWrapper>
            </Presentation>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  //-webkit-appearance: none;
  //-moz-appearance: none;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;



const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--icon-size);
  height: var(--icon-size);
  pointer-events: none;
`;

export default Select;
