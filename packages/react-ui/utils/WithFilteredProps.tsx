import React, { forwardRef } from 'react';
import { StyledComponentProps } from '@agency-platform/shared-types';

const WithFilteredProps = (Component: any) => {
  const WrappedComponent = forwardRef(
    ({ isActive, isHorizontalFeed, iconPosition, layoutVariant, ...rest }: StyledComponentProps, ref) => (
      <Component ref={ref} {...rest} />
    )
  );

  return WrappedComponent;
};

export default WithFilteredProps;
