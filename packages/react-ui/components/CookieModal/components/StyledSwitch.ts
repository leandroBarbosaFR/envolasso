import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledSwitch = styled.input.attrs({ type: 'checkbox' })<StyledComponentProps>`
  appearance: none;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ checked }) => (checked ? '#333' : '#ccc')};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:checked {
    background-color: #333; /* Green when checked */
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.3s ease;
    transform: ${({ checked }) => (checked ? 'translateX(16px)' : 'translateX(0)')};
  }

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 40px;
    height: 24px;
  }

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 40px;
    height: 24px;
  }

  ${({ theme }) => theme.mediaQueries.desktop} {
    width: 40px;
    height: 24px;
  }
`;

export default StyledSwitch;
