import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px;
  margin-top: 25px;
`;

export const DetailsCon = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid;
`;

export const InfoCon = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const Item = styled(Link)`
  font-size: 18px;
  font-weight: 400;

  &.active {
    color: #dc143c;
  }
`;

export const List = styled.ul`
  margin: 10px 0 10px 0;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
