import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
`;

export const CardList = styled.ul`
  list-style: none;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > li {
    font-size: 20px;
    font-weight: 600;
    > p {
      font-size: 15px;
      font-weight: 400;
      margin: 10px 0 0 0;
    }
  }
`;
