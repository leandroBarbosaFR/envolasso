import React from 'react';
import { DialogTheme } from '@agency-platform/themes';
import { Toast } from '@agency-platform/shared-types';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../Button';
// Styles
import StyledClose from './components/StyledClose';
import StyledContent from './components/StyledContent';
import StyledContentInner from './components/StyledContentInner';
import StyledDialog from './components/StyledDialog';
import StyledOverlay from './components/StyledOverlay';
import StyledPortal from './components/StyledPortal';
import StyledVerticalScroll from './components/StyledVerticalScroll';
// Props
export interface DialogProps {
  children: React.ReactNode | React.ReactNode[];
  layoutVariant: keyof DialogTheme;
  toast: Toast;
  hasInner?: boolean;
  callbackFunction?: () => void;
}

const Dialog = ({ children, layoutVariant, toast, hasInner = false, callbackFunction }: DialogProps) => {
  const theme = useTheme();

  const renderContent = (
    <React.Fragment>
      <StyledClose layoutVariant={layoutVariant} asChild>
        <Button
          variant={theme.Dialog[layoutVariant!].StyledContent.StyledClose.Button.variant}
          withIcon={theme.Dialog[layoutVariant!].StyledContent.StyledClose.Button.withIcon}
          withText={theme.Dialog[layoutVariant!].StyledContent.StyledClose.Button.withText}
          iconName={theme.Dialog[layoutVariant!].StyledContent.StyledClose.Button.iconName}
        />
      </StyledClose>
      <StyledVerticalScroll layoutVariant={layoutVariant}>{children}</StyledVerticalScroll>
    </React.Fragment>
  );

  return (
    <StyledDialog
      open={toast.isOpen}
      onOpenChange={(val) => {
        if (!val) toast.close();
        if (!val) callbackFunction && callbackFunction();
      }}
    >
      <StyledPortal>
        <StyledOverlay layoutVariant={layoutVariant} />
        <StyledContent layoutVariant={layoutVariant}>
          {hasInner ? (
            <StyledContentInner layoutVariant={layoutVariant}>
              <div>{renderContent}</div>
            </StyledContentInner>
          ) : (
            renderContent
          )}
        </StyledContent>
      </StyledPortal>
    </StyledDialog>
  );
};

export default Dialog;
