// ==========================================================================
// layoutVariant: types
// ==========================================================================
export type layoutVariant = 'default' | string;

// ==========================================================================
// BurgerNavToggle:
// ==========================================================================
export type BurgerNavToggle = {
  cursor?: string;
  textAlign?: string;
  whiteSpace?: string;
  textDecoration?: string;
  position?: string;
  transition?: string;
  background: string;
  backgroundHover: string;
  backgroundDisabled: string;
  backgroundInverted?: string;
  PointerEventDisabled?: string;
  display: string;
  flexDirection: string;
  justifyContent: string;

  isActive: {
    alignItems: string;
    justifyContent: string;
  };
  span: {
    display: string;
    pointerEvents: string;
    width: string;
    opacity: string;
    opacityDisabled?: string;
    position?: string;
    fill: string;
    fillCollapsed?: string;
    fillHover: string;
    fillActive: string;
    height: string;
    transition: string;

    spanFirstChild: {
      display: string;
    };
    spanSecondChild: {
      transform: string;
    };
    spanThirdChild: {
      transform: string;
    };
  };
  // Mobile
  mobile: {
    height: string;
    width: string;
    margin: string;
    padding: string;
    border: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    borderRadius?: string;
    active: {
      height: string;
      width: string;
    };
  };
  // Large Mobile
  mobileLarge: {
    height: string;
    width: string;
    margin: string;
    padding: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    borderRadius?: string;
    active: {
      height: string;
      width: string;
    };
  };
  // Tabet
  tablet: {
    height: string;
    width: string;
    margin: string;
    padding: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    borderRadius?: string;
    active: {
      height: string;
      width: string;
    };
  };
  // Desktop
  desktop: {
    height: string;
    width: string;
    margin: string;
    padding: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    borderRadius?: string;
    active: {
      height: string;
      width: string;
    };
  };
  // widescreen
  widescreen: {
    height: string;
    width: string;
    margin: string;
    padding: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
    borderLeft?: string;
    borderHover?: string;
    borderTopHover?: string;
    borderRightHover?: string;
    borderBottomHover?: string;
    borderLeftHover?: string;
    borderRadius?: string;
    active: {
      height: string;
      width: string;
    };
  };
};

export type BurgerNavToggleTheme = Record<layoutVariant, BurgerNavToggle>;
