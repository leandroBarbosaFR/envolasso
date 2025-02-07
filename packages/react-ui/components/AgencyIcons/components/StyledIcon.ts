import { StyledComponentProps } from '@agency-platform/shared-types';
import styled from 'styled-components';

const StyledIcon = styled.svg<StyledComponentProps>`
  // ==========================================================================
  // Global
  // ==========================================================================
  all: ${({ layoutVariant, theme }) => theme.AgencyIcons[layoutVariant!].StyledIcon.all};
  display: ${({ layoutVariant, theme }) => theme.AgencyIcons[layoutVariant!].StyledIcon.display};
  height: ${({ layoutVariant, theme }) => theme.AgencyIcons[layoutVariant!].StyledIcon.height};
  width: ${({ layoutVariant, theme }) => theme.AgencyIcons[layoutVariant!].StyledIcon.width};
  /* all: unset;
  display: block;
  height: 100%;
  width: 100%; */
`;

export default StyledIcon;
