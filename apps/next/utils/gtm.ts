const GTMPageView = (url: string) => {
  interface PageEventProps {
    event: string;
    page: string;
  }

  const pageEvent: PageEventProps = {
    event: 'pageview',
    page: url
  };
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

export default GTMPageView;
