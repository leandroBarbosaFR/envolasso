import React, { RefObject, useRef } from 'react';
// utils
import useHorizontalScroll from '../../../hooks/useHorizontalScroll';
// Theme
import { useTheme } from 'styled-components';
// Components
import Button from '../../Button';
// Styl
import StyledBtnWrap from '../components/StyledBtnWrap';

interface HorizontalScrollBtnProps {
  layoutVariant: string;
  feedRef: RefObject<HTMLUListElement>;
}

const HorizontalScrollBtn = ({ layoutVariant, feedRef }: HorizontalScrollBtnProps) => {
  const theme = useTheme();
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const scrollLeft = useHorizontalScroll(feedRef, prevBtnRef, -200, -1000);
  const scrollRight = useHorizontalScroll(feedRef, nextBtnRef, 200, 1000);

  return (
    <StyledBtnWrap layoutVariant={layoutVariant}>
      <Button
        variant={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowLeftButton.variant
        }
        iconName={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowLeftButton.iconName
        }
        withIcon={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowLeftButton.withIcon
        }
        withText={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowLeftButton.withText
        }
        elementRef={prevBtnRef}
        disabled={scrollLeft.scrollX === 0}
      />
      <Button
        variant={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowRightButton.variant
        }
        iconName={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowRightButton.iconName
        }
        withIcon={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowRightButton.withIcon
        }
        withText={
          theme.HorizontalFeed[layoutVariant!].HorizontalScrollBtn.StyledBtnWrap.arrowRightButton.withText
        }
        elementRef={nextBtnRef}
        disabled={scrollRight.scrollEnd}
      />
    </StyledBtnWrap>
  );
};

export default HorizontalScrollBtn;
