import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 25px 0 0 0;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled(Link)`
  font-weight: 400;
  font-size: 20px;

  &.active {
    color: #dc143c;
  }
`;
