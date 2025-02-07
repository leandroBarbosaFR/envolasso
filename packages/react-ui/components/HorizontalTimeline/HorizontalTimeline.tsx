import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalTimeline = () => {
  const containerRef = useRef(null);

  // Hardcoded data for each step card
  const steps = [
    {
      title: 'Raft Music',
      description: '',
      imageUrl: '/raft.png'
    },
    {
      title: 'Media Tracks',
      description: '',
      imageUrl: '/MT.png'
    },
    {
      title: 'Indemnisation.com',
      description: '',
      imageUrl: '/Indemnisation.png'
    },
    {
      title: 'Boost Music',
      description: '',
      imageUrl: '/Boost.png'
    }
    // {
    //   title: 'Step 5: Review',
    //   description:
    //     'In this step, the work is reviewed for quality. Feedback is gathered and improvements are made.',
    //   imageUrl: 'https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
    // },
    // {
    //   title: 'Step 6: Completion',
    //   description:
    //     'This is the final step where the process is completed, and the results are delivered or published.',
    //   imageUrl: 'https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
    // }
  ];

  useEffect(() => {
    const container = containerRef.current;

    // Set up ScrollTrigger to pin and animate the horizontal scroll
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top', // Start animation when section reaches the top
        end: '+=1500', // Adjusted length to allow slower horizontal scrolling
        scrub: 1,
        pin: true, // Pin section while scrolling
        onLeave: () => ScrollTrigger.refresh()
      }
    });

    // Animate horizontal scroll of the container
    timeline.to(container, {
      xPercent: -40, // Moves entire section to scroll horizontally
      duration: 1,
      ease: 'none'
    });

    // Add animation for each card to fade in and move into view
    gsap.utils.toArray('.step-card').forEach((card, i) => {
      const element = card as HTMLElement;
      gsap.fromTo(
        element,
        { opacity: 0, y: i % 2 === 0 ? -80 : 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            containerAnimation: timeline,
            start: 'left center', // Each card animates when near center
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up on unmount
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '600vw', // Adjusted width for 6 cards in a row
        height: '100vh',
        background: '#09090b',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {steps.map((step, i) => (
        <div
          key={i}
          className="step-card"
          style={{
            minWidth: '400px',
            height: '350px', // Increased height to fit the content better
            background: 'transparent',
            borderRadius: '20px',
            margin: '0 15vw', // Increased spacing between cards
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '20px',
            // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            top: i % 2 === 0 ? '-100px' : '100px', // Alternate position for each card
            opacity: 0 // Initially hidden for smooth animation
          }}
        >
          {/* Title */}
          <h2 style={{ marginBottom: '10px' }}>{step.title}</h2>

          {/* Article */}
          <p style={{ fontSize: '0.9rem', color: '#ddd', marginBottom: '20px' }}>{step.description}</p>

          {/* Image */}
          <div style={{ width: '100%', height: 'auto', marginBottom: '15px' }}>
            <img
              src={step.imageUrl}
              alt={step.title}
              style={{
                width: '100%',
                height: '350px',
                borderRadius: '10px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HorizontalTimeline;
