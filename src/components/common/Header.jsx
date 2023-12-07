import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, #f84904, #fdd54f);
    border-bottom: 3px solid #fdd54f;
`;

const Menu = styled.nav`
    display: block;
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid #fdd54f;

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

export function Header(){
  const { pathname } = useLocation();

  return (
    <>
      <HeaderWrapper>
        <Menu>
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
        </Menu>
      </HeaderWrapper>
    </>
  )
}