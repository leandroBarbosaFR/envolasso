import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DOTS, usePagination } from '../../hooks/usePagination';
// Theme
import { useTheme } from 'styled-components';
import { PaginationTheme } from '@agency-platform/themes';
// Components
import AgencyIcons from '../AgencyIcons';
// Styles
import StyledContainer from './components/StyledContainer';
import StyledDots from './components/StyledDots';
import StyledIconButton from './components/StyledIconButton';
import StyledNav from './components/StyledNav';
import StyledPagination from './components/StyledPagination';
import StyledPaginationBtn from './components/StyledPaginationBtn';
import StyledPaginationItem from './components/StyledPaginationItem';

export interface PaginationProps {
  layoutVariant: keyof PaginationTheme;
  pageName: string;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  urlPageNumber: number;
}

const Pagination = ({
  layoutVariant,
  pageName,
  totalCount,
  siblingCount,
  pageSize,
  urlPageNumber
}: PaginationProps): JSX.Element | null => {
  const theme = useTheme();
  const router = useRouter();
  const [isPageChanged, setIsPageChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(urlPageNumber ? Number(urlPageNumber) : 1) as any;
  const paginationRange = usePagination({
    totalCount,
    siblingCount,
    currentPage,
    pageSize
  });

  useEffect(() => {
    if (router.isReady && router?.query && router?.query?.category)
      router.replace(
        `/${pageName}/page/${router?.query?.category[0]}/${currentPage}/${
          router?.query?.category[2] ? router.query.category[2] : 'latest'
        }`
      );
  }, [currentPage, router.isReady]);

  useEffect(() => {
    if (router.isReady && router?.query && router?.query?.category)
      if (router.query.category[1] === '1') setCurrentPage(1);
  }, [router?.query, router.isReady]);

  useEffect(() => {
    if (isPageChanged) {
      const handleRouteChange = () => {
        document.getElementById('feedSection')?.scrollIntoView();
      };
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [isPageChanged]);

  if (paginationRange) {
    if (currentPage === 0 || paginationRange?.length < 2) {
      return null;
    }
  }

  const handleClick = (pageDirection: string, pageNumber?: number | string) => {
    if (pageNumber) {
      setCurrentPage(pageNumber);
    } else {
      if (pageDirection === 'next') {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    }
    setIsPageChanged(true);
  };

  const lastPage = paginationRange && paginationRange[paginationRange?.length - 1];

  return (
    <StyledNav layoutVariant={layoutVariant}>
      <StyledContainer
        isFluid={theme.Pagination[layoutVariant!].StyledContainer.isFluid}
        layoutVariant={layoutVariant}
      >
        <StyledPagination layoutVariant={layoutVariant}>
          {currentPage ? (
            <StyledPaginationItem layoutVariant={layoutVariant}>
              <StyledIconButton
                onClick={() => handleClick('', 1)}
                disabled={currentPage === 1}
                layoutVariant={layoutVariant}
              >
                <AgencyIcons
                  layoutVariant={theme.Pagination[layoutVariant!].AgencyIcons.layoutVariant}
                  name="arrowStart"
                />
              </StyledIconButton>
            </StyledPaginationItem>
          ) : null}
          {currentPage ? (
            <StyledPaginationItem layoutVariant={layoutVariant}>
              <StyledIconButton
                onClick={() => handleClick('previous')}
                disabled={currentPage === 1}
                layoutVariant={layoutVariant}
              >
                <AgencyIcons
                  layoutVariant={theme.Pagination[layoutVariant!].AgencyIcons.layoutVariant}
                  name="arrowLeft"
                />
              </StyledIconButton>
            </StyledPaginationItem>
          ) : null}
          {paginationRange &&
            paginationRange.map((pageNumber, index) => {
              const activePage = pageNumber === currentPage;
              if (pageNumber === DOTS) {
                return (
                  <StyledPaginationItem key={index} layoutVariant={layoutVariant}>
                    <StyledDots layoutVariant={layoutVariant} />
                    <StyledDots layoutVariant={layoutVariant} />
                    <StyledDots layoutVariant={layoutVariant} />
                  </StyledPaginationItem>
                );
              }
              return (
                <StyledPaginationItem
                  key={index}
                  onClick={() => handleClick('', pageNumber)}
                  layoutVariant={layoutVariant}
                >
                  <StyledPaginationBtn
                    active={activePage}
                    onClick={() => handleClick('')}
                    layoutVariant={layoutVariant}
                  >
                    {pageNumber}
                  </StyledPaginationBtn>
                </StyledPaginationItem>
              );
            })}
          {currentPage ? (
            <StyledPaginationItem layoutVariant={layoutVariant}>
              <StyledIconButton
                onClick={() => handleClick('next')}
                disabled={currentPage === lastPage}
                layoutVariant={layoutVariant}
              >
                <AgencyIcons
                  layoutVariant={theme.Pagination[layoutVariant!].AgencyIcons.layoutVariant}
                  name="arrowRight"
                />
              </StyledIconButton>
            </StyledPaginationItem>
          ) : null}
          {currentPage ? (
            <StyledPaginationItem layoutVariant={layoutVariant}>
              <StyledIconButton
                onClick={() => handleClick('', lastPage)}
                disabled={currentPage === lastPage}
                layoutVariant={layoutVariant}
              >
                <AgencyIcons
                  layoutVariant={theme.Pagination[layoutVariant!].AgencyIcons.layoutVariant}
                  name="arrowEnd"
                />
              </StyledIconButton>
            </StyledPaginationItem>
          ) : null}
        </StyledPagination>
      </StyledContainer>
    </StyledNav>
  );
};

export default Pagination;
