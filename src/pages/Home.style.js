import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px;
  margin-top: 25px;
`;

export const Title = styled.h1`
  color: black;
  font-weight: 500;
  font-size: 30px;
  margin: 0;
`;

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
