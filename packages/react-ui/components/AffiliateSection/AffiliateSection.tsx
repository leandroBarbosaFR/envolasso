import React, { useState } from 'react';

const AffiliateSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="affiliate-container"
      style={{
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '16px',
        padding: '60px 20px',
        textAlign: 'center',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '100%'
      }}
    >
      <div
        className="affiliate-content"
        style={{
          background: '#292929',
          margin: '0 auto',
          padding: '80px 20px',
          borderRadius: '20px',
          overflow: 'hidden'
        }}
      >
        <div
          className="affiliate-label"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #6c757d, #343a40)',
            color: '#fff',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          Affiliation
        </div>
        <h1
          className="affiliate-heading"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            lineHeight: '1.4'
          }}
        >
          Recommandez-nous des clients et recevez une récompense !
        </h1>
        <p
          className="affiliate-text"
          style={{
            color: '#aaa',
            marginBottom: '30px'
          }}
        >
          Gagnez 15% de commission pour chaque nouvelle recommandation aboutissant à un client satisfait.
        </p>
        <a
          className="affiliate-button"
          style={{
            background: isHovered
              ? 'linear-gradient(90deg, #343a40, #6c757d)'
              : 'linear-gradient(90deg, #6c757d, #343a40)',
            color: '#fff',
            textDecoration: 'none',
            border: 'none',
            borderRadius: '30px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, opacity 0.3s, background 1s cubic-bezier(0.25, 0.8, 0.25, 1)' // Custom cubic-bezier for background
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          href="mailto:hello1367studio@1367studio.com"
        >
          J’ai une recommandation à faire
        </a>
        <p
          className="affiliate-footer"
          style={{
            fontSize: '14px',
            color: '#aaa',
            marginTop: '20px'
          }}
        >
          Recevez 15% du montant conclu
        </p>
      </div>
      <style>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (max-width: 320px) {
          .affiliate-content {
            max-width: 100%;
          }

          .affiliate-text {
            font-size: 20px;
            line-height: 1.5;
          }
        }
        @media (max-width: 500px) {
          .affiliate-content {
            max-width: 100%;
          }

          .affiliate-text {
            font-size: 20px;
            line-height: 1.5;
          }
        }
        @media (max-width: 740px) {
          .affiliate-content {
            max-width: 100%;
          }

          .affiliate-text {
            font-size: 20px;
            line-height: 1.5;
          }
        }
        @media (min-width: 1020px) {
          .affiliate-content {
            max-width: 80%;
          }

          .affiliate-text {
            font-size: 60px;
            line-height: 1.2;
          }
        }
        @media (min-width: 1460px) {
          .affiliate-content {
            max-width: 60%;
          }

          .affiliate-text {
            font-size: 60px;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

export default AffiliateSection;
