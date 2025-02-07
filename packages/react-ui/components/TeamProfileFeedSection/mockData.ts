const mockDataLength = Array(8).fill(0);
const mockData = [];
const baseHeight = 1000;
const baseWidth = 1000;

for (let i = 0; i < mockDataLength.length; i++) {
  mockData.push({
    id: `${i}`,
    tag: 'Artist Spotlight',
    title: 'Alyssa Page',
    bodycopy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ',
    featureImage: {
      url: `https://picsum.photos/${baseWidth + i}/${baseHeight + i}`
    },
    cta: {
      label: 'view profile',
      url: '/'
    }
  });
}

export default mockData;
