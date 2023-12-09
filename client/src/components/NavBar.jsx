import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoimg from '../assets/static/Logo_blackbg.png';

export const NavBar = () => {

    useEffect(() => {
        const header = document.querySelector('header');
        const scrollHeader = () => {
            const scrollY = window.pageYOffset;
            if (scrollY > 1000) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        }
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        }
    
    });

  return (
    <div style={{
        position: 'fixed',
        width: '100%',
        height: '5rem',
    }}>
        <Header>
            <LogoContainer>
                <Logo src={logoimg} alt="logo" />
            </LogoContainer>

            <Menu>
                <MenuList>
                    <MenuItem>
                        <Link to="/courses">Cursos</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/carriers">Carreras</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/intensive_carriers">Carreras intensivas</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/companies">Para empresas</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Header>
    </div>
  )
}

const Header = styled.header`
    width: 100%;
    height: 5rem;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 3px rgba(255,255,255,0.3);
    background-color: #1A1A1A;
    z-index: 1000;
    transition: all 0.25s ease-in-out;

    &.active {
        transform: translateY(-100%);
    }
`;

const LogoContainer = styled.div`
    width: 11%;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
`;

const Menu = styled.nav`
    width: 35%;
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const MenuItem = styled.li`
    list-style: none;
        a {
            text-decoration: none;
            color: #eee;
            font-weight: 500;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                bottom: -10px;
                left: 0;
                opacity: 0;
                width: 100%;
                height: 2px;
                background-color: #eee;
                background-color: #d4e761;
                transition: opacity 0.5s;
                border-radius: 3px;
            }
            &:hover::after {
                opacity: 1;
            }
        }
`;