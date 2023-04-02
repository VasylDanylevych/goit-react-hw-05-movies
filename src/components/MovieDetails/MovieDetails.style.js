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

export const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid;
  border-radius: 4px;
  padding: 6px 12px;
  margin-bottom: 25px;
  background-color: rgb(192, 192, 192);

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
