import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px;
  background-color: #c0c0c0;
  border-bottom: 1px solid black;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  padding: 8px 0;
  > nav {
    display: flex;
    gap: 15px;
  }
  > div {
    margin-left: 25px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const Logo = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 10px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: #dc143c;
  }
`;
