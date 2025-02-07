import React from 'react';
import TextInfiniteSlider from '../TextInfiniteSlider'
import useWindowDimension from '../../hooks/useWindowDimension';

const InfiniteSlider = () => {
  const {
    isMobile,
    isMobileLarge,
    isTablet,
    isWidescreen,
    isDesktop } = useWindowDimension();
  const columns = [
    [
      {
        src: 'https://logopond.com/logos/f3984bcab2e6d1a8f37f98744883388f.png',
        alt: 'Dean blunt - Black Metal 2'
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677',
        alt: 'Dean blunt - Black Metal 2'
      },
      {
        src: 'https://logopond.com/logos/fbc83a48a972d94a0ecfa403a893a37b.png',
        alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141',
        alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
      },
      {
        src: 'https://cdn.dribbble.com/userupload/19954867/file/original-971e603eff1c62d09be42581a93a07c2.png?resize=2048x1536&vertical=center',
        alt: 'Yung Lean - Stardust'
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf',
        alt: 'Yung Lean - Stardust'
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f',
        alt: 'Lana Del Rey - Ultraviolence'
      },
      {
        src: 'https://cdn.dribbble.com/userupload/19904265/file/original-5177d9682cd940f73f5cf0cf0e1c42cb.jpg?resize=1504x1128&vertical=center',
        alt: 'Lana Del Rey - Ultraviolence'
      }
    ],
    [
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3',
        alt: "You're in My System - TORYONTHEBEAT"
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655',
        alt: "You can't tell me - People Make the World Go Round"
      },
      { src: 'https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2', alt: 'ye - Kanye West' },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288',
        alt: 'A$AP Rocky - Tailor Swif'
      }
    ],
    [
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350',
        alt: 'Slime Season 3 - Young Thug'
      },
      { src: 'https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401', alt: 'SWAG - 8ruki' },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645',
        alt: 'DAYS BEFORE RODEO - Travis Scott'
      },
      {
        src: 'https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520',
        alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy'
      }
    ]
  ];

  // Create styles for animations and responsive design
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollUp {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      
      @keyframes scrollDown {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }

      /* Mobile - 320px */
      @media (min-width: 320px) {
        .slider-column {
          width: 90px !important;
        }
        .image-container {
          width: 90px !important;
          height: 90px !important;
        }
        .slider-wrapper {
          gap: 8px !important;
          justify-content: center !important
        }
      }

      /* Mobile Large - 500px */
      @media (min-width: 500px) {
        .slider-column {
          width: 140px !important;
        }
        .image-container {
          width: 140px !important;
          height: 140px !important;
        }
        .slider-wrapper {
          gap: 10px !important;
          justify-content: center !important;
        }
      }

      /* Tablet - 740px */
      @media (min-width: 740px) {
        .slider-column {
          width: 180px !important;
        }
        .image-container {
          width: 180px !important;
          height: 180px !important;
        }
        .slider-wrapper {
          gap: 12px !important;
          justify-content: center !important;
        }
      }

      /* Desktop - 1020px */
      @media (min-width: 1020px) {
        .slider-column {
          width: 200px !important;
        }
        .image-container {
          width: 200px !important;
          height: 200px !important;
        }
        .slider-wrapper {
          gap: 15px !important;
          justify-content: flex-end !important
        }
      }

      /* Large Desktop - 1460px */
      @media (min-width: 1460px) {
        .slider-column {
          width: 250px !important;
        }
        .image-container {
          width: 250px !important;
          height: 250px !important;
        }
        .slider-wrapper {
          gap: 20px !important;
          justify-content: flex-end !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="slider-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '15px',
        overflow: 'hidden',
        width: '100%',
        height: '800px',
        position: 'relative'
      }}
    >
   {(isDesktop || isWidescreen) && (
      <TextInfiniteSlider />
    )}
      
      {/* Fade effect for top and bottom */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '200px',
          zIndex: 98,
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)'
        }}
      />
     
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 98,
          width: '100%',
          height: '200px',
          background: 'linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%)'
        }}
      />
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className="slider-column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            width: '300px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              animation: `${colIndex % 2 === 0 ? 'scrollUp' : 'scrollDown'} 10s linear infinite`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%'
            }}
          >
            {[...column, ...column].map((image, index) => (
              <div
                key={index}
                className="image-container"
                style={{
                  position: 'relative',
                  width: '200px',
                  height: '200px',
                  marginBottom: '15px',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfiniteSlider;
