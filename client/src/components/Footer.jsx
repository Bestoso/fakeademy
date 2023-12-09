import React, { useEffect } from 'react'
import styled from 'styled-components'

export const Footer = () => {

    useEffect(() => {
        const footer = document.querySelector('footer');
        const scrollFooter = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 1300) {
                footer.classList.add('active');
            } else {
                footer.classList.remove('active');
            }
        }
        window.addEventListener('scroll', scrollFooter);
        return () => {
            window.removeEventListener('scroll', scrollFooter);
        }
    
    });
  return (
    <FooterContainer>
        <PriceInfoContainer>
            <p className="dues">Desde 6 cuptas sin interes de</p>
            <p className="price">$46.778 ARS</p>
            <p className="beca">CoderBeca + 35% OFF $ 280.670 ARS</p>
        </PriceInfoContainer>
        <BuyButton>Inscribirme ahora</BuyButton>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 136px;
    width: 100%;
    box-shadow: 0 0 3px rgba(255,255,255,0.4);
    padding: 0 60px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #1A1A1A;
    z-index: 1000;
    transition: all 0.25s ease-in-out;
    transform: translateY(100%);

    &.active {
        transform: translateY(0);
    }
`;

const PriceInfoContainer = styled.div`
    .dues {
        font-size: 14px;
        margin-bottom: 4px;
    }

    .price {
        font-size: 32px;
        margin-bottom: 4px;
    }

    .beca {
        font-size: 12px;
    }
`;

const BuyButton = styled.button`
    padding: 16px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    color: #1A1A1A;
    background-color: #D1E500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #D4E761;
    }
`;
