import React from 'react'
import styled from 'styled-components'
import heroimage from '../assets/static/heroimg.png'
import reddot from '../assets/static/reddot.png'

export const Course = () => {
    const payCourse = async () => {
        try {
            const response = await fetch('/api/payments/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data.init_point);
            // redirect to checkout page
            if (data.init_point) {
                window.location.href = data.init_point;
            }
            
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <>
        <div className="s" style={{
            height: '5rem',
        }}></div>
        <Hero>
            <LittleCard>
                <LiveImgContainer>
                    <LiveImg src={reddot} alt="" />
                </LiveImgContainer>
                <p data-aos="fade">Online en vivo</p>
            </LittleCard>
            <MainCard>
                <MainCardTItle data-aos="fade" data-aos-delay="100">Carrera de Data Science</MainCardTItle>
                <MainCardList>
                    <li data-aos="fade" data-aos-delay="200">Corrección de proyectos prácticos</li>
                    <li data-aos="fade" data-aos-delay="300">Tutoría personalizada</li>
                    <li data-aos="fade" data-aos-delay="400">¡Aprovechá 2 clases de prueba!</li>
                </MainCardList>
                <MainCardButton data-aos="fade" data-aos-delay="500" onClick={() => payCourse()}>Inscribirme ahora</MainCardButton>
            </MainCard>
            <FloatingImage src="https://www.coderhouse.com/_vercel/image?url=/imgs/landings/development.png&w=1920&q=100" alt="" />
        </Hero>
    </>
  )
}

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
    padding: 0 60px;
`;

const LittleCard = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;

    p {
        margin-bottom: 3px;
        margin-left: 10px;
    }
`;

const LiveImgContainer = styled.div`

`;

const LiveImg = styled.img`

`;

const MainCard = styled.div`

`;

const MainCardTItle = styled.h2`
    font-size: 60px;
`;

const MainCardList = styled.ul`
    font-size: 20px;
    list-style: disc;
    margin-left: 20px;

    li {
        margin: 22px 0;

        &:last-child {
            background: linear-gradient(90deg, #D1E500 0%, #fff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    
`;

const MainCardButton = styled.button`
    font-size: 16px;
    margin-top: 20px;
    padding: 16px 20px;
    border-radius: 5px;
    border: none;
    color: #1A1A1A;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    background-color: #D1E500;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    &:hover {
        background-color: #D4E761;
    }
`;

const FloatingImage = styled.img`
    position: absolute;
    bottom: 14px;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    top: 5rem;
    opacity: 0.7;
`;