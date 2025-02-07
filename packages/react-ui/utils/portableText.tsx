import React from 'react';
// import Heading from '../components/Heading';

const CustomPortableText = {
  // block: {
  //   h1: ({ children }: any) => (
  //     <Heading as={'h1'} variant={'buttonRegLightBg'}>
  //       {children}
  //     </Heading>
  //   ),
  //   h2: ({ children }: any) => (
  //     <Heading as={'h2'} variant={'buttonRegDarkBg'}>
  //       {children}
  //     </Heading>
  //   ),
  //   h3: ({ children }: any) => (
  //     <Heading as={'h3'} variant={'subTitle'}>
  //       {children}
  //     </Heading>
  //   ),
  //   h4: ({ children }: any) => (
  //     <Heading as={'h4'} variant={'subTitle'}>
  //       {children}
  //     </Heading>
  //   ),
  //   h5: ({ children }: any) => (
  //     <Heading as={'h5'} variant={'subTitle'}>
  //       {children}
  //     </Heading>
  //   ),
  //   h6: ({ children }: any) => (
  //     <Heading as={'h6'} variant={'subTitle'}>
  //       {children}
  //     </Heading>
  //   )
  // },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} rel={rel} target={target}>
          {children}
        </a>
      );
    }
  }
};

export default CustomPortableText;
