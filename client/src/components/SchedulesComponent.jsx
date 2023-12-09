import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dates from '../assets/static/js/dates'

export const SchedulesComponent = () => {
    const [schedules, setSchedules] = useState([]);

    const getDates = async () => {
/*         const res = await fetch(dates);
        const data = await res.json();
        setSchedules(data);
        console.log(data); 
        this would MAY be the case if we were using a backend, obviusly a lot more can be done but we will just use a static file in this case
        */
        setSchedules(dates);
        console.log(dates);
    }
    useEffect(() => {
        getDates();
    }, []);

    const iconOne = <i className='bx bx-station yw'></i>;
    const iconTwo = <i className='bx bx-slideshow rd'></i>;
  return (
    <>
        <Modalities />
        <DateContainer>
            <h2 className="title"> Fechas </h2>
            <p className="sub"> Elige la fecha de Desarrollo Web, el primer curso de la carrera. </p>
            <p className="info">
                <span> La modalidad Flex cuenta con 1 clase en vivo de 2 hs por semana más contenido pregrabado.</span>
                <span>La modalidad 100% en vivo cuenta con 2 clases en vivo de 2 hs por semana.</span>
            </p>
        </DateContainer>
        <SchedulesContainer>
            {
                schedules.map((data, i) => {
                    return (
                        <ScheduleCard key={i}>
                            <div className="starts">
                                <p className="tag">
                                    { data.modality  === 'flex' ? iconOne : iconTwo}
                                    { data.modality  === 'flex' ? 'Modalidad Flex' : 'Modalidad 100% en vivo' }
                                </p>
                                <p className="text">
                                    Empieza el
                                </p>
                                <p className="date">
                                    { data.starts_at }
                                </p>
                            </div>

                            <div className="duration">
                                <p className="text">
                                    Duracion
                                </p>
                                <p className="time">
                                    { data.duration }
                                </p>
                            </div>

                            <div className="schedules">
                                <p className="text">
                                    Horarios
                                </p>
                                <p className="info">
                                    { data.schedule }
                                </p>
                            </div>

                            <button className="btn">
                                Elegir
                            </button>
                        </ScheduleCard>
                    )
                })
            }
        </SchedulesContainer>
    </>
  )
}

const Modalities = () => {
    return (
        <ModalitiesContainer>
            <InfoContainer>
                <h2> Nuestras modalidades de cursada </h2>
                <p> Elige tu cursada con la modalidad que mejor se ajuste a tus necesidades. La modalidad seleccionada aplicará para todos los cursos de la carrera, salvo que alguno no se encuentre en esa modalidad. </p>
            </InfoContainer>
            <FlexModality>
            <div className="title_container">
                    <div className="modality-tag"> Incluye Coderbeca </div>
                    <h2 className="title">
                        <i className='bx bx-slideshow'></i>
                        Modalidad Flex 
                        </h2>
                </div>

                <ul className="benefits">
                    <li className="item"> Contenido pregrabado disponible </li>
                    <li className="item"> 1 clase online en vivo (2 h. semanales) </li>
                    <li className="item"> Grabación de las clases en vivo</li>
                    <li className="item"> Preentregas y Proyecto Final </li>
                    <li className="item"> Profesores y adjuntos disponibles </li>
                </ul>

                <ul className="requirements">
                    <div className="title"> Requisitos de Coderbeca </div>
                    <li className="item"> 85% de asistencia en vivo </li>
                    <li className="item"> Cumplir con entregables en tiempo y forma </li>
                </ul>

                <div className="price_container">
                    <div className="discount">
                    CoderBeca + 35% OFF $ 280.670 ARS 6 cuotas sin interés de
                    </div>

                    <div className="total">
                        $46.778 ARS
                    </div>

                    <button className="btn">
                        Inscribirme ahora
                    </button>
                </div>
            </FlexModality>
            <LiveModality>
                <div className="title_container">
                    <div className="modality-tag"> Incluye Coderbeca </div>
                    <h2 className="title">
                        <i className='bx bx-station'></i>
                        Modalidad 100% en vivo
                    </h2>
                </div>

                <ul className="benefits">
                    <li className="item"> 2 clases online en vivo (4 h. semanales) </li>
                    <li className="item"> Grabación de las clases en vivo</li>
                    <li className="item"> Preentregas y Proyecto Final </li>
                    <li className="item"> Profesores y adjuntos disponibles </li>
                </ul>

                <ul className="requirements">
                    <div className="title"> Requisitos de Coderbeca </div>
                    <li className="item"> 85% de asistencia en vivo </li>
                    <li className="item"> Cumplir con entregables en tiempo y forma </li>
                </ul>

                <div className="price_container">
                    <div className="discount">
                    CoderBeca + 35% OFF $ 301.535 ARS 6 cuotas sin interés de
                    </div>

                    <div className="total">
                        $50.256 ARS
                    </div>

                    <button className="btn">
                        Inscribirme ahora
                    </button>
                </div>
            </LiveModality>
        </ModalitiesContainer>
    )
}

const ModalitiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 8rem 0;
    padding: 20px 60px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    align-self: flex-start;

    h2 {
        font-size: 50px;
        line-height: 1;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        color: #BEBEBE;
        line-height: 1.5;
    }
`;

const FlexModality = styled.div` 
    color: #BEBEBE;
    box-shadow: 0 0 2px rgba(255,255,255,0.3);
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 30%;
    height: 550px;
        .title_container {
            margin-bottom: 20px;
            .modality-tag {
                padding: 4px 8px;
                background: #262626;
                width: fit-content;
                margin-bottom: 7px;
                font-size: 12px;
            }

            .title {
                font-size: 26px;
                color: #fff;
                font-weight: 500;
                display: flex;
                align-items: center;


                i {
                    font-size: 30px;
                    margin-right: 10px;
                    color: #D4E761;
                }
            }
        }

    .benefits {
        margin-bottom: 20px;
        .item {
            font-size: 14px;
            margin-bottom: 7px;
        }
    }

    .requirements {
        margin-bottom: 20px;
        .title {
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: 500;
        }
        .item {
            font-size: 14px;
            margin-bottom: 7px;
        }
    }

    .price_container {
        .discount {
            font-size: 14px;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .total {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .btn {
            padding: 16px 20px;
            border: none;
            background: #D1E500;
            border-radius: 5px;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #D4E761;
            }
        }
    }
`;

const LiveModality = styled.div`
    color: #BEBEBE;
    box-shadow: 0 0 2px rgba(255,255,255,0.3);
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 30%;
    height: 550px;
        .title_container {
            margin-bottom: 20px;
            .modality-tag {
                padding: 4px 8px;
                background: #262626;
                width: fit-content;
                margin-bottom: 7px;
                font-size: 12px;
            }

            .title {
                font-size: 26px;
                color: #fff;
                font-weight: 500;

                i {
                    font-size: 30px;
                    margin-right: 10px;
                    color: #ff8970;
                }
            }
        }

    .benefits {
        margin-bottom: 20px;
        .item {
            font-size: 14px;
            margin-bottom: 7px;
        }
    }

    .requirements {
        margin-bottom: 20px;
        .title {
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: 500;
        }
        .item {
            font-size: 14px;
            margin-bottom: 7px;
        }
    }

    .price_container {
        .discount {
            font-size: 14px;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .total {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .btn {
            padding: 16px 20px;
            border: none;
            background: #D1E500;
            border-radius: 5px;
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #D4E761;
            }
        }
    }
`;

const DateContainer = styled.div`
    padding: 20px 60px;
        .title {
            font-size: 60px;
            margin-bottom: 15px;
        }

        .sub {
            font-size: 16px;
            background-color: #262626;
            width: fit-content;
            padding: 4px 8px;
            margin-bottom: 15px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                height: 100%;
                width: 2px;
                background-color: #D1E500;
                left: 0px;
                top: 0;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            font-size: 16px;

            span {
                margin-bottom: 5px;
            }
        }
`;

const SchedulesContainer = styled.div`
    padding: 20px 60px;
    margin-top: 20pxs;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    gap: 20px;

`;

const ScheduleCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 158px;
    box-shadow: 0 0 2px rgba(255,255,255,0.3);
    width: 100%;
    .starts {
        width: 25%;
        .tag {
            // modalidad
            margin-bottom: 10px;
            padding: 4px 8px;
            border-radius: 5px;
            background-color: #262626;
            font-size: 12px;
            color: #BEBEBE;
            width: fit-content;

            .bx {
                margin-right: 10px;
            }

            .yw {
                color: #D4E761;
            }

            .rd {
                color: #ff8970;
            }
        }

        .text {
            color: #BEBEBE;
            margin-bottom: 5px;
        }

        .date {
            // starts_at
        }
    }

    .duration {
        width: 25%;
        .text {
            color: #BEBEBE;
            margin-bottom: 5px;
        }

        .time {

        }
    }

    .schedules {
        width: 25%;
        .text {
            color: #BEBEBE;
            margin-bottom: 5px;
        }

        .info {

        }
    }

    .btn {
        width: 15%;
        padding: 16px 20px;
        border: none;
        color: #D1E500;
        background: #262626;
        border-radius: 5px;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #393b43;
        }
    }
`;