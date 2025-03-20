const mockDataLength = Array(154).fill(0);
const mockData = [];
const baseHeight = 645;
const baseWidth = 967;

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
