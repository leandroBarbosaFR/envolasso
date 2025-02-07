import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// Theme
import { useTheme } from 'styled-components';
// Styles
import StyledReviewWrapper from './components/StyledReviewWrapper';
import StyledReviewCard from './components/StyledReviewCard';
import StyledReviewCardWrapper from './components/StyledReviewCardWrapper';
import StyledArticle from './components/StyledArticle';
import StyledHeading from './components/StyledHeading';
import StyledHeadingWrap from './components/StyledHeadingWrap';
import StyledSubTitle from './components/StyledSubTitle';
import StyledSubTitleWrap from './components/StyledSubTitleWrap';
import StyledExcerpt from './components/StyledExcerpt';
import StyledExcerptWrap from './components/StyledExcerptWrap';
import StyledGrid from './components/StyledGrid';

interface GoogleReviewProps {
  layoutVariant: string;
}

interface Review {
  author_name: string;
  text: string;
  rating: number;
  time: string;
}

const GoogleReview: React.FC<GoogleReviewProps> = ({ layoutVariant }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();

        if (data.result && data.result.reviews) {
          // Map reviews and slice to get the last 4
          const fetchedReviews = data.result.reviews
            .map((review: any) => ({
              author_name: review.author_name,
              text: review.text,
              rating: review.rating,
              time: review.time
            }))
            .slice(-4); // Get the last 4 reviews

          setReviews(fetchedReviews);
        } else {
          setError('No reviews available');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <StyledReviewWrapper layoutVariant={layoutVariant}>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <StyledReviewCardWrapper key={index}>
              <StyledReviewCard layoutVariant={layoutVariant}>
                <StyledGrid
                  layoutVariant={layoutVariant}
                  withRowGap={theme.GoogleReview[layoutVariant!].StyledGrid.withRowGap}
                  withColGapp={theme.GoogleReview[layoutVariant!].StyledGrid.withColGapp}
                >
                  <StyledSubTitleWrap layoutVariant={layoutVariant}>
                    <StyledSubTitle
                      as={'h2'}
                      layoutVariant={layoutVariant}
                      variant={theme.GoogleReview[layoutVariant!].StyledSubTitleWrap.StyledSubTitle.variant}
                    >
                      Rating: {review.rating} / 5
                    </StyledSubTitle>
                  </StyledSubTitleWrap>
                  <StyledHeadingWrap layoutVariant={layoutVariant}>
                    <StyledHeading
                      as={'h1'}
                      layoutVariant={layoutVariant}
                      variant={theme.GoogleReview[layoutVariant!].StyledHeadingWrap.StyledHeading.variant}
                    >
                      {review.author_name}
                    </StyledHeading>
                  </StyledHeadingWrap>
                  <StyledArticle
                    layoutVariant={layoutVariant}
                    variant={theme.GoogleReview[layoutVariant!].StyledArticle.variant}
                  >
                    <p>{review.text}</p>
                  </StyledArticle>
                  <StyledExcerptWrap layoutVariant={layoutVariant}>
                    <StyledExcerpt
                      layoutVariant={layoutVariant}
                      variant={theme.GoogleReview[layoutVariant!].StyledExcerptWrap.StyledExcerpt.variant}
                    >
                      {new Date(Number(review.time) * 1000).toLocaleDateString()}
                    </StyledExcerpt>
                  </StyledExcerptWrap>
                </StyledGrid>
              </StyledReviewCard>
            </StyledReviewCardWrapper>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </StyledReviewWrapper>
    </>
  );
};

export default GoogleReview;
