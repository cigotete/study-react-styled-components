import styled from 'styled-components';
import { Link as ReactRouterDomLink } from "react-router-dom";
import PropTypes from 'prop-types';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-color: #eeeeee;
`;

const Menu = styled.nav`
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    font-family: 'Open Sans';
    background: none;
    left: initial;
    top: initial;
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
  return (
    <>
      <HeaderWrapper>
        <Menu>
          <StyledLink to="/">
            Home
          </StyledLink>
          <StyledLink to="/login">
            Login
          </StyledLink>
        </Menu>
      </HeaderWrapper>
    </>
  )
}