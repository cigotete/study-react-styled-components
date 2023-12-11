import { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Toggle } from '@/components/common';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-image:
      linear-gradient(
        to right,
        ${props => props.theme.primaryColor},
        ${props => props.theme.secondaryColor}
      );
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
    background: ${props => props.theme.bodyBackgroundColor};

    @media( min-width: 768px ){
      display: flex;
      background: none;
      left: initial;
      top: initial;
      margin: auto 0 auto auto;
      border-bottom: none;
      position: relative;
      width: initial;
    }
`;

// eslint-disable-next-line no-unused-vars
const Link = ({isActive, children, ...props}) => {
  return (
      <ReactRouterDomLink {...props}>
          {children}
      </ReactRouterDomLink>
  );
};
Link.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')}; // isActive is not a valid attribute for this anchor tag, so Link component was overriden.
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;

    >div{
        height: 3px;
        background: ${props => props.theme.bodyFontColor};
        margin: 5px 0;
        width: 100%;
    }

    @media(min-width: 768px){
        display: none;
    }
`;

export function Header(){
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {id, setTheme} = useContext(ThemeContext);

  return (
    <>
      <HeaderWrapper>
        <MobileMenuIcon onClick={() => setMenuOpen(menuOpen => !menuOpen)}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
        <Menu open={menuOpen}>
          <StyledLink
            to="/"
            isActive={ pathname === '/'}
          >
            Home
          </StyledLink>
          <StyledLink
            to="/login"
            isActive={ pathname === '/login'}
          >
            Login
          </StyledLink>
          <Toggle $isActive={ id === 'dark' } onToggle={ setTheme } />
        </Menu>
      </HeaderWrapper>
    </>
  )
}