import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: ${props => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
  font-weight: bold;

  ${props => props.large ?
    css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `
    : css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `
  }

  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled{
    background: #eee;
    color: #666;
  }
`;