const mockDataLength = Array(4).fill(0);
const mockData = [];

for (let i = 0; i < mockDataLength.length; i++) {
  mockData.push({
    id: `${i}`,
    tag: 'Artist Spotlight',
    title: 'Alyssa Page',
    bodycopy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna., sed do eiusmod tempor incididunt ut labore et dolore magna., sed do eiusmod tempor incididunt ut labore et dolore magna. ',
    featureImage: {
      url: `https://djgc2e3tghx7j.cloudfront.net/Flex_artist_${i + 1}.jpg`
    },
    cta: {
      label: 'view profile',
      url: '/'
    }
  });
}

export default mockData;
