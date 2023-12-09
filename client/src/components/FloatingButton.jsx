import React, { useEffect } from 'react'
import styled from 'styled-components'

export const FloatingButton = () => {
    useEffect(() => {
        const floatingButton = document.querySelector('.scrh');
        const scrollButton = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 1000) {
                floatingButton.classList.add('active');
            } else {
                floatingButton.classList.remove('active');
            }
        }
        window.addEventListener('scroll', scrollButton);
        return () => {
            window.removeEventListener('scroll', scrollButton);
        }
    }, []);

  return (
    <FloatingButtonStyled className='scrh'>
      <i className='bx bxl-whatsapp'></i>
    </FloatingButtonStyled>
  )
}

const FloatingButtonStyled = styled.div`
    position: fixed;
    bottom: 3rem;
    right: 2.5rem;
    z-index: 1000;
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    background-color: #25d366;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 2rem;
    &:hover {
        background-color: #fff;
        color: #25d366;

    }
    &:active {
        transform: scale(0.9);
    }

    &.active {
        transform: translateY(-200%);
    }
`;

