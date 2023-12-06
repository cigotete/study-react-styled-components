import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: ${props => props.secondary ? 'black' : '#f8049c'};
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
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