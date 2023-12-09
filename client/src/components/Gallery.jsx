import React from 'react'
import styled from 'styled-components'
import coderbeca from '../assets/static/coderbeca.png'
import modalidades from '../assets/static/modalidades.png'

export const Gallery = () => {
  return (
    <>
        <GalleryContainer>
            <ImageContainer data-aos="fade" style={{
                zIndex: '-1',
            }}>
                <Image draggable="false" src={coderbeca} alt="coderbeca" style={{
                    scale: '1.2',
                    zIndex: '-1',
                }} />
            </ImageContainer>
        </GalleryContainer>
        <AboutComponent />
        <ProofCardComponent />
    </>
  )
}

const AboutComponent = () => {
    return (
        <AboutContainer>
            <LeftDivs>
                <AboutTitle data-aos="fade">Sobre la carrera</AboutTitle>
                <AboutCardContainer data-aos="fade" data-aos-delay="100">
                    <AboutCard>
                        <CardIconContainer>
                            <i className='bx bx-calendar'></i>
                        </CardIconContainer>
                        <CardTextContainer>
                            <CardText>Duración: 53 semanas - Modalidad Flex</CardText>
                            <CardDownload>
                                <p>Descargar programa</p>
                                <i className='bx bx-download' ></i>
                            </CardDownload>
                        </CardTextContainer>
                    </AboutCard>
                    <AboutCard>
                        <CardIconContainer>
                            <i className='bx bx-calendar'></i>
                        </CardIconContainer>
                        <CardTextContainer>
                            <CardText>Duración: 52 semanas - Modalidad 100% en vivo</CardText>
                            <CardDownload>
                                <p>Descargar programa</p>
                                <i className='bx bx-download' ></i>
                            </CardDownload>
                        </CardTextContainer>
                    </AboutCard>
                </AboutCardContainer>
            </LeftDivs>
            <RightDivs data-aos="fade">
                <p>En esta carrera te desarrollarás desde cero como Data Scientist. Aprenderás a trabajar con grandes conjuntos de datos, a limpiarlos y organizarlos para su análisis. También aprenderás a programar en lenguajes como Python y R, y a utilizar herramientas de análisis de datos como Pandas y Matplotlib. Además, conocerás técnicas de aprendizaje automático y minería, que te permitirán extraer información valiosa de los datos. Esto te permitirá tomar decisiones informadas y crear soluciones innovadoras a problemas complejos.</p>
            </RightDivs>
        </AboutContainer>
    )
}

const ProofCardComponent = () => {
    return (
        <ProofCardContainer>

            <ProofCard>
                
                <ProofCardTitle>
                    <h2> ¡Aprovechá 2 clases de prueba! </h2>
                </ProofCardTitle>

                <ProofCardInfoContainer>
                    <ProofCardInfo>
                        <p>Te damos 2 clases de prueba en tu primer curso en Coderhouse y, si no cumplimos con tus expectativas, te devolvemos el 100% del dinero. Sin preguntas.</p>
                        <button>Elegir modalidad de cursada</button>
                    </ProofCardInfo>
                </ProofCardInfoContainer>
            </ProofCard>

        </ProofCardContainer>
    )
}

const GalleryContainer = styled.section`
    margin: 7rem 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ImageContainer = styled.div`

`

const Image = styled.img`

`;

const AboutContainer = styled.div`
    padding: 20px 60px;
    display: flex;
    justify-content: space-around;
    height: 60vh;
`;

const LeftDivs = styled.div`
    display: flex;
    flex-direction: column;
`;

const AboutTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 20px;
`;

const AboutCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
`;

const AboutCard = styled.div`
    display: flex;
    background-color: #262626;
    width: 100%;
    padding: 16px 20px;
    align-items: center;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 7px rgba(255,255,255,0.2);
    }
`;

const CardIconContainer = styled.div`
        i {
            font-size: 40px;
            color: #eee;
        }
`;

const CardTextContainer = styled.div`
    margin-left: 30px;
`;

const CardText = styled.h3`

`;

const CardDownload = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #D1E500;

    i {
        margin-left: 7px;
        font-size: 20px;
    }
`;

const RightDivs = styled.div`
    width: 30%;
    align-self: center;
    font-size: 19px;
`;

const ProofCardContainer = styled.div`
    width: 100%;
    margin: 7rem 0;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 60px;
`;

const ProofCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 100%;
    width: 90%;
    padding: 20px 60px;
    border-radius: 5px;
`;

const ProofCardTitle = styled.div`
    width: 50%;
    padding: 0 20px;
        h2 {
            font-size: 60px;
            height: 100%;
            color: #1D1D1D;
        }
`;

const ProofCardInfoContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px 0px;
`;

const ProofCardInfo = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    p {
        font-size: 24px;
        color: #1D1D1D;
    }

    button {
        margin-top: 30px;
        width: 70%;
        height: 50px;
        background-color: #1A1A1A;
        border: none;
        border-radius: 5px;
        color: #ccdf02;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        padding: 16px 20px;

        &:hover {
            background-color: #393b43;
        }
    }
`;